
CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers 
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(100) NOT NULL,
devoured boolean NOT NULL default 0,
createdAt timestamp NOT NULL default current_timestamp,
PRIMARY KEY (id)
);

