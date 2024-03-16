import { Prisma } from '@prisma/client';

export class ProductDto {
  id?: string;
  name: string;
  description: string;
  price: Prisma.Decimal = new Prisma.Decimal(99);
  imageUrl: string;
  categoryId: number;
  inStock: boolean;
  stock: number;
}
