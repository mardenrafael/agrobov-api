/*
  Warnings:

  - Added the required column `ownerId` to the `Ox` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ox" ADD COLUMN     "ownerId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Ox" ADD CONSTRAINT "Ox_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
