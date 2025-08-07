import { IsInt, IsOptional } from 'class-validator';

export class CreateWishlistDto {
  @IsInt()
  user_id: number;

  @IsInt()
  course_id: number;
}