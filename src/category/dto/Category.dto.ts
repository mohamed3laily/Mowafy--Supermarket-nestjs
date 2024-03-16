import { IsBoolean, IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CategoryDto {
  id?: number;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  imageUrl: string;
}
