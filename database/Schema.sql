-- MySQL Script generated by MySQL Workbench
-- Wed Dec 16 12:41:30 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema banco
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema banco
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `banco` DEFAULT CHARACTER SET utf8 ;
USE `banco` ;

-- -----------------------------------------------------
-- Table `banco`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `banco`.`Cliente` (
  `id` INT NOT NULL,
  `documento` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `banco`.`Cuenta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `banco`.`Cuenta` (
  `id` INT NOT NULL,
  `saldo` INT NOT NULL,
  `Estado` TINYINT NOT NULL,
  `Cliente_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Cuenta_Cliente_idx` (`Cliente_id` ASC) VISIBLE,
  CONSTRAINT `fk_Cuenta_Cliente`
    FOREIGN KEY (`Cliente_id`)
    REFERENCES `banco`.`Cliente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `banco`.`Transaccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `banco`.`Transaccion` (
  `idTransaccion` INT NOT NULL,
  `monto` INT NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `CuentaOrigen_id` INT NOT NULL,
  `CuentaDestino_id` INT NOT NULL,
  PRIMARY KEY (`idTransaccion`),
  INDEX `fk_Transaccion_Cuenta1_idx` (`CuentaOrigen_id` ASC) VISIBLE,
  INDEX `fk_Transaccion_Cuenta2_idx` (`CuentaDestino_id` ASC) VISIBLE,
  CONSTRAINT `fk_Transaccion_Cuenta1`
    FOREIGN KEY (`CuentaOrigen_id`)
    REFERENCES `banco`.`Cuenta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Transaccion_Cuenta2`
    FOREIGN KEY (`CuentaDestino_id`)
    REFERENCES `banco`.`Cuenta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `banco`.`CuentaDestino`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `banco`.`CuentaDestino` (
  `id` INT NOT NULL,
  `saldo` INT NOT NULL,
  `Estado` TINYINT NOT NULL,
  `Cliente` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
