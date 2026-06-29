/*
  Warnings:

  - You are about to drop the column `eduction` on the `Lecturer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lecturer" DROP COLUMN "eduction",
ADD COLUMN     "education" TEXT;
