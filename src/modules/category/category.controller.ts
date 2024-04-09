import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Res,
  Patch,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/Category.dto';
import { CreateCategoryDto } from './dto/createCategory.dto';

@Controller('Categories') // Defines the base route for this controller
export class CategoryController {
  constructor(private readonly CategoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<CategoryDto[]> {
    return await this.CategoryService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<CategoryDto | null> {
    return await this.CategoryService.findById(id);
  }

  @Post()
  async create(
    @Body() Category: CreateCategoryDto,
  ): Promise<CreateCategoryDto> {
    return await this.CategoryService.create(Category);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() Category: CreateCategoryDto,
  ): Promise<CategoryDto | null> {
    // Parse the string ID to a number if needed
    return await this.CategoryService.update(id, Category);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() response): Promise<void> {
    await this.CategoryService.delete(id);
    response.json({ message: 'Category deleted successfully' }); // Optional success message
  }
}
