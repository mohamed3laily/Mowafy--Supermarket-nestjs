import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Res,
  Patch,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductDto } from './dto/product.dto';

@Controller('products') // Defines the base route for this controller
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(@Res() response): Promise<ProductDto[]> {
    const products = await this.productService.findAll();
    return response.json(products); // Assuming you use response object for sending data
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ProductDto | null> {
    return await this.productService.findById(id);
  }

  @Post()
  async create(@Body() product: CreateProductDto): Promise<ProductDto> {
    return await this.productService.create(product);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() product: CreateProductDto, // Consider using UpdateProductDto if needed
  ): Promise<ProductDto | null> {
    return await this.productService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') @Res() response, id: string): Promise<void> {
    await this.productService.delete(id);
    return response.json({ message: 'Product deleted successfully' }); // Optional success message
  }
}
