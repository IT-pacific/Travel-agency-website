/*
  Warnings:

  - Added the required column `departureLocation` to the `Package` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departureTime` to the `Package` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `package` ADD COLUMN `departureLocation` VARCHAR(255) NOT NULL,
    ADD COLUMN `departureTime` VARCHAR(255) NOT NULL,
    MODIFY `price` DECIMAL(10, 2) NULL;
