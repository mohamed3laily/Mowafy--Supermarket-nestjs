import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { UserStatus } from '@prisma/client';
import { Order } from '@prisma/client';
import { CreateOrderDto } from 'src/modules/order/dto/create-order.dto';

export class UpdateUserDto {
  @IsString()
  fullName?: string;

  @IsString()
  userName?: string;

  @IsEmail()
  email?: string;

  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  status?: UserStatus;
}
