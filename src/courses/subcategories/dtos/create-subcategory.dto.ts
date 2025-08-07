import { IsString, IsOptional, IsBoolean, IsInt } from 'class-validator';

export class CreateSubcategoryDto {
  @IsInt()
  category_id: number;

  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsBoolean()
  is_active: boolean;
}