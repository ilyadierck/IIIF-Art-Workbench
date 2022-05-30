from distutils.log import debug
from email.mime import base
from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import json
import databaseconfig as cfg
import os
import requests
import yaml
import shutil
from flaskext.mysql import MySQL

app = Flask(__name__)
CORS(app)
api = Api(app)

BIIIF_PATH = "biiif-npm-version/paintings/"
WEBSERVER_URL = "http://127.0.0.1:8887/biiif-npm-version/paintings/"
FABRITIUS_BASE_URL = "http://www.opac-fabritius.be"

# MySQL configurations
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = cfg.mysql["user"]
app.config['MYSQL_DATABASE_PASSWORD'] = cfg.mysql["passwd"]
app.config['MYSQL_DATABASE_DB'] = cfg.mysql["db"]
app.config['MYSQL_DATABASE_HOST'] = cfg.mysql["host"]
app.app_context().push()
mysql.init_app(app)
    
def resultToDict(result):
    store = {}
    for annotation in result:
        store[annotation[0]] = annotation[2]
    return store

def concatValues(t1, t2):
    res = []
    for value in t1:
        res.append(value)
    for value in t2:
        res.append(value)
    return res

def setupIIIFStructure(image_link, resource_dict):
    resource_dict["id"] = resource_dict["id"].replace("/", "")
    biiifPath = BIIIF_PATH + resource_dict["id"]
    biiifPath = biiifPath.replace(" ", "")
    if (os.path.exists(biiifPath)):
        return WEBSERVER_URL + resource_dict["id"] + "/index.json"
    r = requests.get(image_link, stream = True, timeout=5)
    
    if r.status_code == 200:
        r.raw.decode_content = True
        
        image_name = image_link.split("/")[-1]

        if not os.path.exists(biiifPath):
            os.mkdir(biiifPath)

        with open(biiifPath + "/" + image_name,'wb') as f:
            shutil.copyfileobj(r.raw, f)
        
        ymlPath = biiifPath+ "/"+ 'info.yml'
        with open(ymlPath, 'w') as file:
            yaml.dump(resource_dict, file)

        os.system("biiif " + biiifPath + " -u " + WEBSERVER_URL + biiifPath.split("/")[-1])
        

        return WEBSERVER_URL + resource_dict["id"] + "/index.json"
    else:
        print('Unable to download image')

class Annotation(Resource):
    def post(self):
        content = request.json
        content = json.loads(json.dumps(content))
        id = content.get('id')
        resourceId = list(reversed(id.split("/")))[3]
        mydb = mysql.connect()
        mycursor = mydb.cursor()
        sql = "INSERT INTO annotations (id, resourceId,annotation_page) VALUES (%s, %s, %s)"
        val = (id,resourceId, json.dumps(content))
        mycursor.execute(sql, val)
        mydb.commit()
        mycursor.close()
        return content

    def get(self):
        mydb = mysql.connect()
        mycursor = mydb.cursor()
        mycursor.execute("SELECT * FROM annotations")
        res = mycursor.fetchall()
        mycursor.close()
        return resultToDict(res)

    def patch(self):
        content = request.json
        content = json.loads(json.dumps(content))
        id = content.get('id')

        mydb = mysql.connect()
        mycursor = mydb.cursor()
        sql = "UPDATE annotations SET annotation_page = %s WHERE id = %s"
        val = (json.dumps(content), id)
        mycursor.execute(sql, val)
        mydb.commit()
        mycursor.close()
    
    def delete(self):
        Annotation.patch(self)

class Authors(Resource):
    authorId = None

    def get(self):
        if self.authorId == None:
            sql = "SELECT * FROM authors"
            val = ()
        else:
            sql = "SELECT * FROM authors WHERE creatorAuthID = %s"
            val = (self.authorId,)
        mydb = mysql.connect()
        mycursor = mydb.cursor()
        
        mycursor.execute(sql, val)
        res = mycursor.fetchall()
        mycursor.close()
        self.authorId = None
        return res
    
    def post(self, json):
        mydb = mysql.connect()
        mycursor = mydb.cursor()
        sql = "INSERT INTO authors (name, birthdate, deathdate, creatorAuthID) VALUES (%s,%s,%s,%s)"
        val = (json["name"], json["birthdate"], json["deathdate"], json["creatorAuthID"])
        mycursor.execute(sql, val)
        mydb.commit()
        mycursor.close()

class Resources(Resource):
    def get(self):
        mydb = mysql.connect()
        mycursor = mydb.cursor()
        mycursor.execute("SELECT * FROM resources")
        mycursor.close()
        return mycursor.fetchall()
    
    def post(self):
        mydb = mysql.connect()
        content = request.json
        content = json.loads(json.dumps(content))
        mycursor = mydb.cursor()
        
        self.authorId = content["metadata"]["Author"]["creatorAuthID"]
        foundAuthor = Authors.get(self)
        if (len(foundAuthor) == 0):
            Authors.post(self, content["metadata"]["Author"])
            foundAuthor = Authors.get(self)

        sql = "INSERT INTO resources (id, authorId, description, creationYear, imageLink, title, type, vubisLink, bulkmetadata) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (str(content["id"]), foundAuthor[0][0], content["metadata"]["Description"], content["metadata"]["CreationYear"], content["metadata"]["ImageLink"], content["metadata"]["Title"], content["metadata"]["Type"], content["metadata"]["LinkToVubis"], content["metadata"]["BulkMetadata"])
        mycursor.execute(sql, val)
        mydb.commit()
        mycursor.close()

class ResourceLookup(Resource):
    def get(self, query):
        mydb = mysql.connect()
        mycursor = mydb.cursor()
        endResourceSql =  "SELECT * FROM resources WHERE bulkmetadata LIKE '%" + str(query)+ "%'"
        annotationSql = "SELECT resourceId FROM annotations WHERE annotation_page like '%" + str(query) + "%'"
        mycursor.execute(endResourceSql)
        res = mycursor.fetchall()
        mycursor.close()
        mycursor = mydb.cursor()
        mycursor.execute("Select * from resources where id in (" + annotationSql + ")")
        annotatedResources = mycursor.fetchall()
        res = concatValues(res, annotatedResources)
        mycursor.close()
        return res

class IIIF(Resource):
    def post(self):
        content = request.json
        content = json.loads(json.dumps(content))
        author = content["author"]
        resource = content["resource"]

        resource_final_dict = {
        "label": resource[5],
        "id": resource[0],
        "metadata" : {
            "Inventaris number": resource[0],
            "Description": resource[2],
            "Author": author[1] + " (" + author[2] + "-" + author[3] + ")",
            "Creation year": resource[3],
            "Link to more info": "<a href=" + resource[7] + ">Fabritius</a>"
            },
        }
        return setupIIIFStructure(resource[4], resource_final_dict)
        
api.add_resource(Annotation, '/annotations') 
api.add_resource(ResourceLookup, '/resources/<string:query>') 
api.add_resource(Resources, '/resources') 
api.add_resource(Authors, '/authors') 
api.add_resource(IIIF, '/iiif') 

if __name__ == '__main__':
    app.run()  # run our Flask app