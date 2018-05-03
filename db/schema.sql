-- Created the DB "burgers_db" (only works on local connections)
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "burgers" 
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(45) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT false,
  PRIMARY KEY(id)
);
