import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';
import { PrismaService } from 'nestjs-prisma';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, PrismaService],
  imports: [],
})
export class ProductModule {}
