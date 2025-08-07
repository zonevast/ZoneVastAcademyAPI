import { IsInt, IsBoolean, IsOptional } from 'class-validator';

export class CreateLectureProgressDto {
  @IsInt()
  enrollment_id: number;

  @IsInt()
  lecture_id: number;

  @IsBoolean()
  is_completed: boolean;

  @IsOptional()
  @IsInt()
  watch_time_seconds?: number;

  @IsOptional()
  @IsInt()
  last_position_seconds?: number;
}