/*
  Warnings:

  - The primary key for the `Page` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `endpoint` on the `Page` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Flag" DROP CONSTRAINT "Flag_pageId_fkey";

-- DropIndex
DROP INDEX "Page_endpoint_key";

-- AlterTable
ALTER TABLE "Flag" ALTER COLUMN "pageId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Page" DROP CONSTRAINT "Page_pkey",
DROP COLUMN "endpoint",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Page_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Page_id_seq";

-- AddForeignKey
ALTER TABLE "Flag" ADD CONSTRAINT "Flag_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
