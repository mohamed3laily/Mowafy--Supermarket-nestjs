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
  async findAll(@Res() response): Promise<CategoryDto[]> {
    const Categories = await this.CategoryService.findAll();
    return response.json(Categories); // Assuming you use response object for sending data
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<CategoryDto | null> {
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
    @Param('id') id: number,
    @Body() Category: CreateCategoryDto,
  ): Promise<CategoryDto | null> {
    return await this.CategoryService.update(id, Category);
  }

  @Delete(':id')
  async delete(@Param('id') @Res() response, id: number): Promise<void> {
    await this.CategoryService.delete(id);
    return response.json({ message: 'Category deleted successfully' }); // Optional success message
  }
}
