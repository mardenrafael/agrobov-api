/*
  Warnings:

  - Added the required column `genre` to the `Ox` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Oxgenre" AS ENUM ('Male', 'Female');

-- AlterTable
ALTER TABLE "Ox" ADD COLUMN     "genre" "Oxgenre" NOT NULL;
