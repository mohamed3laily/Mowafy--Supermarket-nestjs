import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { CreateProductDto } from './dto/createProduct.dto';
import { Product } from '@prisma/client';
import { ProductRepository } from './product.repository';
import { FilterProductDTO } from './dto/filter-product-dto';
import { ProductReviewDTO } from './dto/create-review-dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findAllProducts(): Promise<ProductDto[]> {
    const products = await this.productRepository.findAllProducts();
    return products;
  }

  async findById(id: string): Promise<ProductDto | null> {
    const product = await this.productRepository.findById(id);
    return product;
  }

  async createProduct(product: CreateProductDto): Promise<CreateProductDto> {
    const newProduct = await this.productRepository.createProduct(product);
    return newProduct;
  }

  async updateProduct(
    id: string,
    product: ProductDto,
  ): Promise<ProductDto | null> {
    const updatedProduct = await this.productRepository.updateProduct(
      id,
      product,
    );
    return updatedProduct;
  }

  async deleteProduct(id: string): Promise<void> {
    await this.productRepository.deleteProduct(id);
  }

  async createReview(
    userId: string,
    productId: string,
    review: ProductReviewDTO,
  ): Promise<ProductReviewDTO> {
    const newReview = await this.productRepository.createProductReview(
      userId,
      productId,
      review,
    );
    return newReview;
  }

  async findLatestProducts(): Promise<ProductDto[]> {
    const products = await this.productRepository.findLatestProducts();
    return products;
  }
  async updateProductStock(id: string, quantity: number): Promise<ProductDto> {
    const updatedProduct = await this.productRepository.updateProductStock(
      id,
      quantity,
    );
    return updatedProduct;
  }
}
