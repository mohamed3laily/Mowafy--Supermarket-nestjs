import { OrderItemDTO } from './orderItem.dto';
import { Prisma, User } from '@prisma/client';
import { OrderStatus, PaymentMethod } from '@prisma/client';

export class CreateOrderDto {
  orderDate: Date;
  totalAmount: number;
  userId: string;
  orderItems?: OrderItemDTO[];
  status: OrderStatus;
  address: string;
  paymentMethod: PaymentMethod;
}
