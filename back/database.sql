drop database if exists wildreactcircus;
create database wildreactcircus;

use wildreactcircus;

create table `spectator`(
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  email VARCHAR(100),
  password VARCHAR(95),
  PRIMARY KEY(`id`)
);