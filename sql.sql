CREATE SCHEMA Coins;
CREATE TABLE IF NOT EXISTS `estudiantes` (
  `Numero_Documento` varchar(20) NOT NULL,
  `Primer_Nombre` varchar(45) NOT NULL,
  `Segundo_Nombre` varchar(45) DEFAULT NULL,
  `Primer_Apellido` varchar(45) NOT NULL,
  `Segundo_Apellido` varchar(45) DEFAULT NULL,
  `Celular` int(10) unsigned NOT NULL,
  `Tipo_Documento` varchar(45) NOT NULL,
  `Correo` varchar(45) NOT NULL,
  `Saldo` int NOT NULL,
  `Estado` varchar(45) NOT NULL,
  `idEstudiante` int unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`Numero_Documento`,`idEstudiante`,`Correo`),
  UNIQUE KEY `Numero_Documento_UNIQUE` (`Numero_Documento`),
  UNIQUE KEY `Correo_UNIQUE` (`Correo`),
  UNIQUE KEY `idEstudiante_UNIQUE` (`idEstudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;

-- COLLATE=utf8mb4_0900_personasai_cil
USE Coins;
SHOW TABLES;
SELECT * FROM estudiantes;

INSERT INTO estudiantes (Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado, idEstudiante) VALUES ('123456789','beatriz', 'tereza','restrepo', 'grau',3005436545, 'CC', 'beatricita@hotmail.com',0, 'in', 1);
DELETE FROM estudiantes  ;

-- PELIGRO
-- SET SQL_SAFE_UPDATES = 0;
-- drop table estudiantes;
