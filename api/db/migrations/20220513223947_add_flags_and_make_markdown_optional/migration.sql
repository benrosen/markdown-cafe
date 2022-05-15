/*
  Warnings:

  - Added the required column `updatedAt` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "markdown" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Flag" (
    "id" SERIAL NOT NULL,
    "pageId" INTEGER NOT NULL,

    CONSTRAINT "Flag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Flag" ADD CONSTRAINT "Flag_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
