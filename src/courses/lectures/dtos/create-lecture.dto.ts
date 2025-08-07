import { IsInt, IsString, IsOptional, IsBoolean, IsJSON } from 'class-validator';

export class CreateLectureDto {
  @IsInt()
  section_id: number;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  video_url: string;

  @IsInt()
  duration_minutes: number;

  @IsInt()
  order_index: number;

  @IsOptional()
  @IsJSON()
  resources?: JSON;

  @IsBoolean()
  is_active: boolean;
}