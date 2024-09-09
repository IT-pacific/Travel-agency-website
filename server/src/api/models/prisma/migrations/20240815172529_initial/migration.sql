/*
  Warnings:

  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.
  - Added the required column `picture` to the `Itinerary` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_username_key` ON `user`;

-- AlterTable
ALTER TABLE `itinerary` ADD COLUMN `picture` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `username`;
