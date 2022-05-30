"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/** */
var SimpleAnnotationServerV2Adapter = /*#__PURE__*/function () {
  /** */
  function SimpleAnnotationServerV2Adapter(canvasId, endpointUrl) {
    this.canvasId = canvasId;
    this.endpointUrl = endpointUrl;
  }
  /** */


  var _proto = SimpleAnnotationServerV2Adapter.prototype;

  /** */
  _proto.create =
  /*#__PURE__*/
  function () {
    var _create = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(annotation) {
      var _this = this;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", fetch(this.endpointUrl + "/create", {
                body: JSON.stringify(SimpleAnnotationServerV2Adapter.createV2Anno(annotation)),
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                method: 'POST'
              }).then(function (response) {
                return _this.all();
              })["catch"](function () {
                return _this.all();
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function create(_x) {
      return _create.apply(this, arguments);
    }

    return create;
  }()
  /** */
  ;

  _proto.update =
  /*#__PURE__*/
  function () {
    var _update = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(annotation) {
      var _this2 = this;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", fetch(this.endpointUrl + "/update", {
                body: JSON.stringify(SimpleAnnotationServerV2Adapter.createV2Anno(annotation)),
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                method: 'POST'
              }).then(function (response) {
                return _this2.all();
              })["catch"](function () {
                return _this2.all();
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function update(_x2) {
      return _update.apply(this, arguments);
    }

    return update;
  }()
  /** */
  ;

  _proto["delete"] =
  /*#__PURE__*/
  function () {
    var _delete2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(annoId) {
      var _this3 = this;

      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", fetch(this.endpointUrl + "/destroy?uri=" + encodeURIComponent(annoId), {
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                method: 'DELETE'
              }).then(function (response) {
                return _this3.all();
              })["catch"](function () {
                return _this3.all();
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function _delete(_x3) {
      return _delete2.apply(this, arguments);
    }

    return _delete;
  }()
  /** */
  ;

  _proto.get =
  /*#__PURE__*/
  function () {
    var _get = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4(annoId) {
      var annotationPage;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.all();

            case 2:
              annotationPage = _context4.sent;

              if (!annotationPage) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", annotationPage.items.find(function (item) {
                return item.id === annoId;
              }));

            case 5:
              return _context4.abrupt("return", null);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function get(_x4) {
      return _get.apply(this, arguments);
    }

    return get;
  }()
  /** Returns an AnnotationPage with all annotations */
  ;

  _proto.all =
  /*#__PURE__*/
  function () {
    var _all = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      var resp, annos;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return fetch(this.annotationPageId);

            case 2:
              resp = _context5.sent;
              _context5.next = 5;
              return resp.json();

            case 5:
              annos = _context5.sent;
              return _context5.abrupt("return", this.createAnnotationPage(annos));

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function all() {
      return _all.apply(this, arguments);
    }

    return all;
  }()
  /** Creates a V2 annotation from a V3 annotation */
  ;

  SimpleAnnotationServerV2Adapter.createV2Anno = function createV2Anno(v3anno) {
    var _this4 = this;

    var v2anno = {
      '@context': 'http://iiif.io/api/presentation/2/context.json',
      '@type': 'oa:Annotation',
      motivation: 'oa:commenting',
      on: {
        '@type': 'oa:SpecificResource',
        full: v3anno.target.source.id
      }
    }; // copy id if it is SAS-generated

    if (v3anno.id && v3anno.id.startsWith('http')) {
      v2anno['@id'] = v3anno.id;
    }

    if (Array.isArray(v3anno.body)) {
      v2anno.resource = v3anno.body.map(function (b) {
        return _this4.createV2AnnoBody(b);
      });
    } else {
      v2anno.resource = this.createV2AnnoBody(v3anno.body);
    }

    if (v3anno.target.selector) {
      if (Array.isArray(v3anno.target.selector)) {
        var selectors = v3anno.target.selector.map(function (s) {
          return _this4.createV2AnnoSelector(s);
        }); // create choice, assuming two elements and 0 is default

        v2anno.on.selector = {
          '@type': 'oa:Choice',
          "default": selectors[0],
          item: selectors[1]
        };
      } else {
        v2anno.on.selector = this.createV2AnnoSelector(v3anno.target.selector);
      }

      if (v3anno.target.source.partOf) {
        v2anno.on.within = {
          '@id': v3anno.target.source.partOf.id,
          '@type': 'sc:Manifest'
        };
      }
    }

    return v2anno;
  }
  /** */
  ;

  SimpleAnnotationServerV2Adapter.createV2AnnoBody = function createV2AnnoBody(v3body) {
    var v2body = {
      chars: v3body.value
    };

    if (v3body.purpose === 'tagging') {
      v2body['@type'] = 'oa:Tag';
    } else {
      v2body['@type'] = 'dctypes:Text';
    }

    if (v3body.format) {
      v2body.format = v3body.format;
    }

    if (v3body.language) {
      v2body.language = v3body.language;
    }

    return v2body;
  }
  /** */
  ;

  SimpleAnnotationServerV2Adapter.createV2AnnoSelector = function createV2AnnoSelector(v3selector) {
    switch (v3selector.type) {
      case 'SvgSelector':
        return {
          '@type': 'oa:SvgSelector',
          value: v3selector.value
        };

      case 'FragmentSelector':
        return {
          '@type': 'oa:FragmentSelector',
          value: v3selector.value
        };

      default:
        return null;
    }
  }
  /** Creates an AnnotationPage from a list of V2 annotations */
  ;

  _proto.createAnnotationPage = function createAnnotationPage(v2annos) {
    if (Array.isArray(v2annos)) {
      var v3annos = v2annos.map(function (a) {
        return SimpleAnnotationServerV2Adapter.createV3Anno(a);
      });
      return {
        id: this.annotationPageId,
        items: v3annos,
        type: 'AnnotationPage'
      };
    }

    return v2annos;
  }
  /** Creates a V3 annotation from a V2 annotation */
  ;

  SimpleAnnotationServerV2Adapter.createV3Anno = function createV3Anno(v2anno) {
    var _this5 = this;

    var v3anno = {
      id: v2anno['@id'],
      motivation: 'commenting',
      type: 'Annotation'
    };

    if (Array.isArray(v2anno.resource)) {
      v3anno.body = v2anno.resource.map(function (b) {
        return _this5.createV3AnnoBody(b);
      });
    } else {
      v3anno.body = this.createV3AnnoBody(v2anno.resource);
    }

    var v2target = v2anno.on;

    if (Array.isArray(v2target)) {
      var _v2target = v2target;
      v2target = _v2target[0];
    }

    v3anno.target = {
      selector: this.createV3AnnoSelector(v2target.selector),
      source: v2target.full
    };

    if (v2target.within) {
      v3anno.target.source = {
        id: v2target.full,
        partOf: {
          id: v2target.within['@id'],
          type: 'Manifest'
        },
        type: 'Canvas'
      };
    }

    return v3anno;
  }
  /** */
  ;

  SimpleAnnotationServerV2Adapter.createV3AnnoBody = function createV3AnnoBody(v2body) {
    var v3body = {
      type: 'TextualBody',
      value: v2body.chars
    };

    if (v2body.format) {
      v3body.format = v2body.format;
    }

    if (v2body.language) {
      v3body.language = v2body.language;
    }

    if (v2body['@type'] === 'oa:Tag') {
      v3body.purpose = 'tagging';
    }

    return v3body;
  }
  /** */
  ;

  SimpleAnnotationServerV2Adapter.createV3AnnoSelector = function createV3AnnoSelector(v2selector) {
    switch (v2selector['@type']) {
      case 'oa:SvgSelector':
        return {
          type: 'SvgSelector',
          value: v2selector.value
        };

      case 'oa:FragmentSelector':
        return {
          type: 'FragmentSelector',
          value: v2selector.value
        };

      case 'oa:Choice':
        /* create alternate selectors */
        return [this.createV3AnnoSelector(v2selector["default"]), this.createV3AnnoSelector(v2selector.item)];

      default:
        return null;
    }
  };

  _createClass(SimpleAnnotationServerV2Adapter, [{
    key: "annotationPageId",
    get: function get() {
      return this.endpointUrl + "/search?uri=" + this.canvasId;
    }
  }]);

  return SimpleAnnotationServerV2Adapter;
}();

exports["default"] = SimpleAnnotationServerV2Adapter;