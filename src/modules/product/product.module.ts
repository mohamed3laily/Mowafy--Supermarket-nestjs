import { Module } from '@nestjs/common';
import {
  ProductAdminController,
  ProductController,
} from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { PrismaService } from 'nestjs-prisma';

@Module({
  controllers: [ProductController, ProductAdminController],
  providers: [ProductService, ProductRepository, PrismaService],
  imports: [],
})
export class ProductModule {}
