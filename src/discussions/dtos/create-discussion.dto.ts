import { IsString, IsInt, IsBoolean, IsOptional } from 'class-validator';

export class CreateDiscussionDto {
  @IsInt()
  course_id: number;

  @IsInt()
  user_id: number;

  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsBoolean()
  is_pinned: boolean;

  @IsBoolean()
  is_answered: boolean;

  @IsOptional()
  @IsInt()
  reply_count?: number;
}