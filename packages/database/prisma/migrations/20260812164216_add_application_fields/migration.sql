/*
  Warnings:

  - Added the required column `resumeVersion` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "applicationContact" TEXT,
ADD COLUMN     "connections" TEXT,
ADD COLUMN     "coverLetter" TEXT,
ADD COLUMN     "easyApply" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "jobDescription" TEXT,
ADD COLUMN     "resumeVersion" TEXT NOT NULL DEFAULT 'Generic',
ADD COLUMN     "website" TEXT;
