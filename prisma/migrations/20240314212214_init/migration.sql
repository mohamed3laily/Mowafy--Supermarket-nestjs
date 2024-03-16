-- CreateEnum
CREATE TYPE "ProductCategoryEnum" AS ENUM ('Dairy', 'snacks', 'Bakery', 'CannedGoods', 'DryGoods', 'Oils_Vinegars', 'Condiments');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "category" "ProductCategoryEnum" NOT NULL,
    "inStock" BOOLEAN NOT NULL DEFAULT true,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE INDEX "Product_name_idx" ON "Product"("name");
