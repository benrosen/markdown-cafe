-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "endpoint" TEXT NOT NULL,
    "markdown" TEXT NOT NULL,
    "secret" TEXT NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_endpoint_key" ON "Page"("endpoint");
