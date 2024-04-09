import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma'; // Assumes Prisma service is configured
import { Order, Prisma, User } from '@prisma/client';
import { OrderDto } from './dto/order.dto'; // Add the missing import
import { CreateOrderDto } from './dto/create-order.dto'; // Add the missing import

@Injectable()
export class OrderRepository {
  constructor(private prisma: PrismaService) {}

  async create(order: CreateOrderDto): Promise<Order> {
    const { userId, ...rest } = order;

    const orderItemsData = order.orderItems.map((item) => ({
      quantity: item.quantity,
      price: item.price,
      product: { connect: { id: item.productId } },
    }));

    const userData = { connect: { id: userId } };

    const orderData = {
      ...rest,
      User: userData,
      orderItems: { create: orderItemsData },
      address: {
        create: { address: rest.address },
      } as unknown as Prisma.AddressCreateNestedOneWithoutOrdersInput, // Fix the type of 'address' property
    };

    return await this.prisma.order.create({
      data: orderData,
    });
  }
}
