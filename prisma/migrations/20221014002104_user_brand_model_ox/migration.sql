/*
  Warnings:

  - A unique constraint covering the columns `[brand]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `brand` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "brand" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Ox" (
    "id" SERIAL NOT NULL,
    "marked" BOOLEAN NOT NULL DEFAULT false,
    "earring" TEXT,
    "born_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_brand_key" ON "User"("brand");
