/*
  Warnings:

  - You are about to drop the column `education` on the `Lecturer` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `Lecturer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Lecturer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Lecturer" DROP COLUMN "education",
DROP COLUMN "position",
ADD COLUMN     "academicRank" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expertise" TEXT,
ADD COLUMN     "structuralPosition" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SiteSetting" ALTER COLUMN "id" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL,
ALTER COLUMN "password" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
