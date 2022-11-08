/*
  Warnings:

  - You are about to alter the column `earring` on the `Ox` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(7)`.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(70)`.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(70)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(150)`.
  - You are about to alter the column `brand` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(8)`.

*/
-- AlterTable
ALTER TABLE "Ox" ALTER COLUMN "earring" SET DATA TYPE CHAR(7),
ALTER COLUMN "born_date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET DATA TYPE CHAR(70),
ALTER COLUMN "email" SET DATA TYPE CHAR(70),
ALTER COLUMN "password" SET DATA TYPE CHAR(150),
ALTER COLUMN "brand" SET DATA TYPE CHAR(8);
