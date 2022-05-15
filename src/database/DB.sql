CREATE DATABASE BDPT_BETATECH;

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    apellido1 VARCHAR(50),
    apellido2 VARCHAR(50)
);

INSERT INTO usuarios(nombre,apellido1,apellido2)
       VALUES('Samuel','Bermudez','Padilla'),
       ('Teresa','Hidalgo','Valverde');