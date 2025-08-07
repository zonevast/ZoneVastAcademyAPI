import { IsString, IsOptional, IsInt, IsBoolean, IsNumber } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  short_description?: string;

  @IsOptional()
  @IsString()
  long_description?: string;

  @IsInt()
  instructor_id: number;

  @IsInt()
  subcategory_id: number;

  @IsOptional()
  @IsString()
  thumbnail_url?: string;

  @IsOptional()
  @IsString()
  preview_video_url?: string;

  @IsInt()
  level: number;

  @IsNumber()
  price: number;

  @IsNumber()
  rating: number;

  @IsBoolean()
  certificate_provided: boolean;

  @IsInt()
  status: number;
}