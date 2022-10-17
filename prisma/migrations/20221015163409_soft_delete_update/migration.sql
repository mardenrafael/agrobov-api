/*
  Warnings:

  - You are about to drop the column `deleted_at` on the `Ox` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ox" DROP COLUMN "deleted_at",
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;
