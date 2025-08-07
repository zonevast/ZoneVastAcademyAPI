import { IsInt } from 'class-validator';

export class CreateCourseStatDto {
  @IsInt()
  course_id: number;

  @IsInt()
  duration_hours: number;

  @IsInt()
  total_lectures: number;

  @IsInt()
  enrollment_count: number;

  @IsInt()
  total_reviews: number;
}