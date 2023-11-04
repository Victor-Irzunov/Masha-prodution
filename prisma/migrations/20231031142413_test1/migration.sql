-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Zapisi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `start` DATETIME(3) NOT NULL,
    `end` DATETIME(3) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `zapros` VARCHAR(191) NOT NULL,
    `allDay` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Articles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `article` VARCHAR(191) NOT NULL,
    `img` JSON NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `like` INTEGER NOT NULL DEFAULT 0,
    `group` VARCHAR(191) NOT NULL,
    `count` INTEGER NOT NULL DEFAULT 0,
    `publication` BOOLEAN NOT NULL DEFAULT false,
    `view` INTEGER NOT NULL,
    `dateTime` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Otzyvy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `otzyv` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `response` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `vozvrast` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
    `rate` VARCHAR(191) NOT NULL,
    `isPublication` BOOLEAN NOT NULL DEFAULT false,
    `isNew` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
