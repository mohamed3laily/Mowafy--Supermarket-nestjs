import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { CreateProductDto } from './dto/createProduct.dto';
import { Product } from '@prisma/client';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findAll(): Promise<ProductDto[]> {
    const products = await this.productRepository.findAll();
    return products;
  }

  async findById(id: string): Promise<ProductDto | null> {
    const product = await this.productRepository.findById(id);
    return product;
  }

  async create(product: CreateProductDto): Promise<CreateProductDto> {
    const newProduct = await this.productRepository.create(product);
    return newProduct;
  }

  async update(id: string, product: ProductDto): Promise<ProductDto | null> {
    const updatedProduct = await this.productRepository.update(id, product);
    return updatedProduct;
  }

  async delete(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
