/*
  Warnings:

  - You are about to drop the column `deleted` on the `Ox` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ox" DROP COLUMN "deleted",
ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "deleted",
ADD COLUMN     "deleted_at" TIMESTAMP(3);
