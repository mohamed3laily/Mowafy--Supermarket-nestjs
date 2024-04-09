import { IsBoolean, IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CategoryDto {
  @IsString()
  id?: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  imageUrl: string;
}
