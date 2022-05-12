use *Insert database name here*;

CREATE TABLE `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `birthdate` varchar(200) DEFAULT NULL,
  `deathdate` varchar(200) DEFAULT NULL,
  `creatorAuthID` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27276 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `resources` (
  `id` varchar(200) NOT NULL,
  `authorId` int DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `creationYear` varchar(200) DEFAULT NULL,
  `imageLink` varchar(200) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `type` varchar(200) DEFAULT NULL,
  `vubisLink` varchar(200) DEFAULT NULL,
  `bulkmetadata` longtext,
  PRIMARY KEY (`id`),
  KEY `author_idx` (`authorId`),
  CONSTRAINT `author` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `annotations` (
  `id` varchar(200) NOT NULL,
  `resourceId` varchar(45) NOT NULL,
  `annotation_page` longtext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `resourceId_idx` (`resourceId`),
  CONSTRAINT `resourceId` FOREIGN KEY (`resourceId`) REFERENCES `resources` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
