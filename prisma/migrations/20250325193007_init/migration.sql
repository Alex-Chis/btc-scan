-- CreateTable
CREATE TABLE "CryptoCoin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CryptoCoin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cryptoId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CryptoCoin_name_key" ON "CryptoCoin"("name");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_cryptoId_fkey" FOREIGN KEY ("cryptoId") REFERENCES "CryptoCoin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
