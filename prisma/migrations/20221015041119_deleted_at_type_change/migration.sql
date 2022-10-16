-- AlterTable
ALTER TABLE "Ox" ALTER COLUMN "deleted_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "deleted_at" SET DEFAULT '',
ALTER COLUMN "deleted_at" SET DATA TYPE TEXT;
