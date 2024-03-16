import { IsBoolean, IsDecimal, IsNotEmpty, IsString } from 'class-validator';
import { Prisma } from '@prisma/client';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsDecimal()
  price: Prisma.Decimal = new Prisma.Decimal(99);
  imageUrl: string;

  categoryId: number;
  @IsBoolean()
  inStock: boolean; // Optional for default value
  stock: number;
}
