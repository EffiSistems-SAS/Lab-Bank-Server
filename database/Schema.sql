/* ---------------------------------------------------- */
/*  Generated by Enterprise Architect Version 15.1 		*/
/*  Created On : 11-ene.-2021 17:56:06 				*/
/*  DBMS       : MySql 						*/
/* ---------------------------------------------------- */

SET FOREIGN_KEY_CHECKS=0
; 
/* Drop Tables */

DROP TABLE IF EXISTS Cliente CASCADE
;

DROP TABLE IF EXISTS Cuenta CASCADE
;

DROP TABLE IF EXISTS Operacion CASCADE
;

DROP TABLE IF EXISTS Operacion_Cliente CASCADE
;

DROP TABLE IF EXISTS TarjetaDebito CASCADE
;

/* Create Tables */

CREATE TABLE Cliente
(
	idCliente BIGINT NOT NULL,
	direccion VARCHAR(50) NOT NULL,
	nombre VARCHAR(30) NOT NULL,
	telefono INT NOT NULL,
	CONSTRAINT PK_Cliente PRIMARY KEY (idCliente ASC)
)

;

CREATE TABLE Cuenta
(
	idCuenta VARCHAR(50) NOT NULL,
	contraseña MEDIUMINT NOT NULL,
	numero BIGINT NOT NULL,
	saldo DOUBLE(10,2) NOT NULL,
	idTarjeta VARCHAR(50) NOT NULL,
	idCliente BIGINT NOT NULL,
	numeroTarjeta BIGINT NOT NULL,
	CONSTRAINT PK_Cuenta PRIMARY KEY (idCuenta ASC, numero ASC)
)

;

CREATE TABLE Operacion
(
	idOperacion VARCHAR(50) NOT NULL,
	codigo_confirmacion INT NOT NULL,
	tipo VARCHAR(50) NOT NULL,
	CONSTRAINT PK_Operacion PRIMARY KEY (idOperacion ASC)
)

;

CREATE TABLE Operacion_Cliente
(
	idOperacion VARCHAR(50) NOT NULL,
	idCliente BIGINT NOT NULL,
	fechaOperacion TIMESTAMP(6) NOT NULL,
	idCuentaAbonada VARCHAR(50) NULL,
	Valor BIGINT NULL,
	idOperacion_Cliente VARCHAR(50) NOT NULL,
	CONSTRAINT PK_Operacion_Cliente PRIMARY KEY (idOperacion_Cliente ASC)
)

;

CREATE TABLE TarjetaDebito
(
	idTarjeta VARCHAR(50) NOT NULL,
	numero BIGINT NOT NULL,
	contraseña SMALLINT NOT NULL,
	CONSTRAINT PK_Table1 PRIMARY KEY (idTarjeta ASC, numero ASC)
)

;

/* Create Primary Keys, Indexes, Uniques, Checks */

ALTER TABLE Cliente 
 ADD CONSTRAINT CK_idCliente CHECK (idCliente > 0)
;

ALTER TABLE Cuenta 
 ADD INDEX IXFK_Cuenta_Cliente (idCliente ASC)
;

ALTER TABLE Cuenta 
 ADD INDEX IXFK_Cuenta_TarjetaDebito (idTarjeta ASC)
;

ALTER TABLE Cuenta 
 ADD INDEX IXFK_Cuenta_TarjetaDebito_02 (idTarjeta ASC, numeroTarjeta ASC)
;

ALTER TABLE Operacion_Cliente 
 ADD INDEX IXFK_Operacion_Cliente_Cliente (idCliente ASC)
;

ALTER TABLE Operacion_Cliente 
 ADD INDEX IXFK_Operacion_Cliente_Operacion (idOperacion ASC)
;

/* Create Foreign Key Constraints */

ALTER TABLE Cuenta 
 ADD CONSTRAINT FK_Cuenta_Cliente
	FOREIGN KEY (idCliente) REFERENCES Cliente (idCliente) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE Cuenta 
 ADD CONSTRAINT FK_Cuenta_TarjetaDebito
	FOREIGN KEY (idTarjeta, numeroTarjeta) REFERENCES TarjetaDebito (idTarjeta,numero) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE Operacion_Cliente 
 ADD CONSTRAINT FK_Operacion_Cliente_Cliente
	FOREIGN KEY (idCliente) REFERENCES Cliente (idCliente) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE Operacion_Cliente 
 ADD CONSTRAINT FK_Operacion_Cliente_Operacion
	FOREIGN KEY (idOperacion) REFERENCES Operacion (idOperacion) ON DELETE Restrict ON UPDATE Restrict
;

SET FOREIGN_KEY_CHECKS=1
; 
