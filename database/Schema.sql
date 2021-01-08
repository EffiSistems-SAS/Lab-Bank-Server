CREATE DATABASE atm;

USE atm;

SET FOREIGN_KEY_CHECKS=0; 
/* Drop Tables */

DROP TABLE IF EXISTS Cliente CASCADE;

DROP TABLE IF EXISTS Cuenta CASCADE;

DROP TABLE IF EXISTS Operacion CASCADE;

DROP TABLE IF EXISTS Operacion_Cliente CASCADE;

DROP TABLE IF EXISTS TarjetaDebito CASCADE;

/* Create Tables */

CREATE TABLE Cliente(
	idCliente INT NOT NULL,
	direccion VARCHAR(50) NOT NULL,
	nombre VARCHAR(30) NOT NULL,
	telefono INT NOT NULL,
	CONSTRAINT PK_Cliente PRIMARY KEY (idCliente ASC)
);

CREATE TABLE Cuenta(
	idCuenta INT NOT NULL,
	contraseña INT NOT NULL,
	numero INT NOT NULL,
	saldo DOUBLE(10,2) NOT NULL,
	idTarjeta INT NOT NULL,
	idCliente INT NOT NULL,
	CONSTRAINT PK_Cuenta PRIMARY KEY (idCuenta ASC)
);

CREATE TABLE Operacion(
	idOperacion INT NOT NULL,
	codigo_confirmacion INT NOT NULL,
	tipo VARCHAR(50) NOT NULL,
	CONSTRAINT PK_Operacion PRIMARY KEY (idOperacion ASC)
);

CREATE TABLE Operacion_Cliente(
	idOperacion INT NOT NULL,
	idCliente INT NOT NULL,
	CONSTRAINT PK_Operacion_Cliente PRIMARY KEY (idOperacion ASC, idCliente ASC)
);

CREATE TABLE TarjetaDebito(
	idTarjeta INT NOT NULL,
	contraseña INT NOT NULL,
	numero INT NOT NULL,
	CONSTRAINT PK_TarjetaDebito PRIMARY KEY (idTarjeta ASC)
);

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
	FOREIGN KEY (idTarjeta) REFERENCES TarjetaDebito (idTarjeta) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE Operacion_Cliente 
 ADD CONSTRAINT FK_Operacion_Cliente_Cliente
	FOREIGN KEY (idCliente) REFERENCES Cliente (idCliente) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE Operacion_Cliente 
 ADD CONSTRAINT FK_Operacion_Cliente_Operacion
	FOREIGN KEY (idOperacion) REFERENCES Operacion (idOperacion) ON DELETE Restrict ON UPDATE Restrict
;

SET FOREIGN_KEY_CHECKS=1; 