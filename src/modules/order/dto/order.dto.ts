import { OrderStatus } from '../order.enum';
import { OrderItemDTO } from './orderItem.dto';

export class OrderDto {
  id: string;
  orderDate: Date;
  totalAmount: number;
  userId: string;
  orderItems: OrderItemDTO[];
  status: OrderStatus;
  address: string;
  paymentMethod: string;
}
