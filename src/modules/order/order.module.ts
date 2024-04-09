import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';
import { PrismaService } from 'nestjs-prisma';
@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderRepository, PrismaService],
})
export class OrderModule {}
