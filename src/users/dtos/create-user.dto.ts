import {
  IsString,
  IsEmail,
  IsOptional,
  IsBoolean,
  IsDateString,
  IsInt,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password_hash: string; // Normally you'd hash it before saving

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsOptional()
  @IsInt()
  profile_picture_id?: number;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsDateString()
  date_of_birth?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsBoolean()
  is_verified?: boolean;
}
