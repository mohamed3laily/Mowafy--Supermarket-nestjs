import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma'; // Assumes Prisma service is configured
import { Category } from '@prisma/client';
import { CategoryDto } from './dto/Category.dto';
import { CreateCategoryDto } from './dto/createCategory.dto';

@Injectable()
export class CategoryRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    return await this.prisma.category.findMany({});
  }

  async findById(id: number): Promise<Category | null> {
    return await this.prisma.category.findUnique({
      where: { id },
    });
  }

  async create(category: CreateCategoryDto): Promise<Category> {
    return await this.prisma.category.create({
      data: category,
    });
  }

  async update(
    id: number,
    category: CreateCategoryDto,
  ): Promise<Category | null> {
    return await this.prisma.category.update({
      where: { id },
      data: category,
    });
  }

  async delete(id: number): Promise<Category | null> {
    return await this.prisma.category.delete({
      where: { id },
    });
  }
}
