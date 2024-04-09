import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma'; // Assumes Prisma service is configured
import { Product, ProductReview } from '@prisma/client';
import { ProductDto } from './dto/product.dto'; // Add the missing import
import { FilterProductDTO } from './dto/filter-product-dto'; // Add the missing import
import { ProductReviewDTO } from './dto/create-review-dto'; // Add the missing import

@Injectable()
export class ProductRepository {
  constructor(private prisma: PrismaService) {}

  async findAllProducts(): Promise<Product[]> {
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

  async getFilteredProducts(
    filterProductDTO: FilterProductDTO,
  ): Promise<Product[]> {
    const { category, search } = filterProductDTO;
    let products = await this.findAllProducts();

    if (search) {
      products = products.filter(
        (product) =>
          product.name.includes(search) || product.description.includes(search),
      );
    }

    return products;
  }

  async createProduct(product: ProductDto): Promise<Product> {
    return await this.prisma.product.create({
      data: product,
    });
  }

  async updateProduct(
    id: string,
    product: ProductDto,
  ): Promise<Product | null> {
    return await this.prisma.product.update({
      where: { id },
      data: product,
    });
  }

  async deleteProduct(id: string): Promise<Product | null> {
    return await this.prisma.product.delete({
      where: { id },
    });
  }
  async findProductByCategory(categoryId: string): Promise<Product[]> {
    return await this.prisma.product.findMany({
      where: { categoryId },
    });
  }

  async updateProductStock(
    productId: string,
    quantity: number,
  ): Promise<Product | null> {
    return await this.prisma.product.update({
      where: { id: productId },
      data: {
        stock: {
          increment: quantity,
        },
      },
    });
  }
  async findLatestProducts(limit: number = 25): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return products;
  }

  async createProductReview(
    userId: string,
    productId: string,
    review: ProductReviewDTO,
  ): Promise<ProductReview> {
    // Find the user by ID
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    // Find the product by ID
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!user || !product) {
      throw new UnauthorizedException('User or product not found');
    }

    // Create the product review
    return this.prisma.productReview.create({
      data: {
        ...review,
        productId: product.id,
        userId: user.id,
      },
    });
  }
}
