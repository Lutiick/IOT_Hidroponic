CREATE SCHEMA IF NOT EXISTS `hydroponics` DEFAULT CHARACTER SET utf8;

USE `hydroponics`;

-- -----------------------------------------------------
-- Table `hydroponics`.`Plant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hydroponics`.`Plant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL,
  `nutrientVolume` INT NOT NULL,
  `nutrientAdditionFrequency` INT NOT NULL,
  `lastTimeNutrientAdded` DATETIME NULL,
  `isSelected` TINYINT(1) NULL DEFAULT 0,
  `createdAt` DATETIME NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `hydroponics`.`Temperature`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hydroponics`.`Temperature` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` INT NULL,
  `createdAt` DATETIME NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `hydroponics`.`Humidity`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hydroponics`.`Humidity` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` INT NULL,
  `createdAt` DATETIME NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `hydroponics`.`WaterLevel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hydroponics`.`WaterLevel` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` INT NULL,
  `createdAt` DATETIME NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;