import { IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateDiscussionReplyDto {
  @IsInt()
  discussion_id: number;

  @IsInt()
  user_id: number;

  @IsString()
  content: string;

  @IsBoolean()
  is_instructor_reply: boolean;

  @IsBoolean()
  is_solution: boolean;

  @IsInt()
  helpful_count: number;
}