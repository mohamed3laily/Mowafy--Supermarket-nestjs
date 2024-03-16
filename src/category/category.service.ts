import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { CategoryRepository } from './category.repository';
import { CategoryDto } from './dto/Category.dto';
import { CreateCategoryDto } from './dto/createCategory.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly productRepository: CategoryRepository) {}

  async findAll(): Promise<CategoryDto[]> {
    const products = await this.productRepository.findAll();
    return products;
  }

  async findById(id: number): Promise<CategoryDto | null> {
    const product = await this.productRepository.findById(id);
    return product;
  }

  async create(product: CreateCategoryDto): Promise<CreateCategoryDto> {
    const newProduct = await this.productRepository.create(product);
    return newProduct;
  }

  async update(id: number, product: CategoryDto): Promise<CategoryDto | null> {
    const updatedProduct = await this.productRepository.update(id, product);
    return updatedProduct;
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
