import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma'; // Assumes Prisma service is configured
import { Product } from '@prisma/client';
import { ProductDto } from './dto/product.dto'; // Add the missing import

@Injectable()
export class ProductRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    return await this.prisma.product.findMany({
      include: { category: true },
    });
  }

  async findById(id: string): Promise<Product | null> {
    return await this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async create(product: ProductDto): Promise<Product> {
    return await this.prisma.product.create({
      data: product,
    });
  }

  async update(id: string, product: ProductDto): Promise<Product | null> {
    return await this.prisma.product.update({
      where: { id },
      data: product,
    });
  }

  async delete(id: string): Promise<Product | null> {
    return await this.prisma.product.delete({
      where: { id },
    });
  }
}
