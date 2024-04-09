import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProduct.dto';
import { ProductDto } from './dto/product.dto';
import { ProductReviewDTO } from './dto/create-review-dto';
import { JwtGuard } from '../auth/guard/guard';
import { RolesGuard } from '../auth/guard/roles-guard';
import { GetUser } from '../auth/decorator/getUserDecorator';
import { User } from '@prisma/client';
import { Roles } from '../auth/decorator/roles-decorator';
import { Role } from '../user/user-enum';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<ProductDto[]> {
    return this.productService.findAllProducts();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ProductDto | null> {
    return this.productService.findById(id);
  }

  @UseGuards(JwtGuard)
  @Post(':productId/reviews')
  async createProductReview(
    @GetUser() user: User,
    @Param('productId') productId: string,
    @Body() review: ProductReviewDTO,
  ) {
    try {
      const userId = user.id; // You will need to replace this with actual user ID (from authentication)
      return await this.productService.createReview(userId, productId, review);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}

@Controller('admin/products')
export class ProductAdminController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post()
  async create(@Body() product: CreateProductDto): Promise<ProductDto> {
    try {
      return await this.productService.createProduct(product);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  @Patch(':id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async update(
    @Param('id') id: string,
    @Body() product: CreateProductDto, // Use UpdateProductDto if needed
  ): Promise<ProductDto | null> {
    try {
      return await this.productService.updateProduct(id, product);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    try {
      await this.productService.deleteProduct(id);
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
