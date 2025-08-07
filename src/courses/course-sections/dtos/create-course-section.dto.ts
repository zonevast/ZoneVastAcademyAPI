import { IsInt, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateCourseSectionDto {
  @IsInt()
  course_id: number;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsInt()
  order_index: number;

  @IsBoolean()
  is_active: boolean;
}