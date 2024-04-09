import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Category } from '@prisma/client';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { ConflictException } from '@nestjs/common';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    return this.prisma.category.findMany({});
  }

  async findById(id: string): Promise<Category | null> {
    const category = await this.prisma.category.findUnique({
      where: { id },
    });
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    // Check if a category with the same name already exists
    const existingCategory = await this.prisma.category.findFirst({
      where: { name: createCategoryDto.name },
    });

    if (existingCategory) {
      throw new ConflictException(
        `Category with name '${createCategoryDto.name}' already exists`,
      );
    }

    return this.prisma.category.create({
      data: createCategoryDto,
    });
  }

  async update(
    id: string,
    updateCategoryDto: CreateCategoryDto,
  ): Promise<Category | null> {
    const existCategory = await this.findById(id);
    if (!existCategory)
      throw new NotFoundException(`Category with ID ${id} not found`);

    const updatedCategory = await this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });

    return updatedCategory;
  }

  async delete(id: string): Promise<Category | null> {
    const deletedCategory = await this.prisma.category.delete({
      where: { id },
    });
    if (!deletedCategory) {
      return null; // Return null if category not found
    }
    return deletedCategory;
  }
}
