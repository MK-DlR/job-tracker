-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "followUp1Week" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "followUp2Week" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "followUp3Day" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "resumeVersion" DROP DEFAULT;
