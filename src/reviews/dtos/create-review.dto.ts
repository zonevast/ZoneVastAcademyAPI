import { IsInt, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateReviewDto {
  @IsInt()
  course_id: number;

  @IsInt()
  user_id: number;

  @IsNumber()
  rating: number;

  @IsOptional()
  @IsString()
  comment?: string;
}