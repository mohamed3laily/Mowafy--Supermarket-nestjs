import { IsNotEmpty, IsEmail, IsString, IsOptional } from 'class-validator';

export class UserDto {
  id: string;
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  imageUrl?: string;

  @IsOptional()
  status?: string;

  @IsOptional()
  emailVerified?: boolean;

  @IsOptional()
  role?: string;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;

  @IsOptional()
  orders?: any[]; // Assuming you will populate this later

  @IsOptional()
  passwordResetToken?: string;

  @IsOptional()
  passwordResetTokenExpiry?: Date;
}
