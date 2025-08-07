import { IsInt, IsString, IsOptional, IsJSON, IsNumber, IsBoolean } from 'class-validator';

export class CreateInstructorDto {
  @IsInt()
  user_id: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsJSON()
  expertise?: JSON;

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsBoolean()
  is_featured: boolean;
}