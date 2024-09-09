/*
  Warnings:

  - You are about to drop the `postcomment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `postreply` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `postcomment` DROP FOREIGN KEY `PostComment_postId_fkey`;

-- DropForeignKey
ALTER TABLE `postcomment` DROP FOREIGN KEY `PostComment_userId_fkey`;

-- DropForeignKey
ALTER TABLE `postreply` DROP FOREIGN KEY `PostReply_commentId_fkey`;

-- DropForeignKey
ALTER TABLE `postreply` DROP FOREIGN KEY `PostReply_userId_fkey`;

-- DropTable
DROP TABLE `postcomment`;

-- DropTable
DROP TABLE `postreply`;
