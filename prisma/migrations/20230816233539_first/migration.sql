/*
  Warnings:

  - You are about to alter the column `globalTime` on the `joinLog` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `localTime` on the `joinLog` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `joinLog` MODIFY `globalTime` INTEGER NOT NULL,
    MODIFY `localTime` INTEGER NOT NULL;
