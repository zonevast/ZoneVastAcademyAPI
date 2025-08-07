import { IsInt, IsNumber, IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateEnrollmentDto {
  @IsInt()
  user_id: number;

  @IsInt()
  course_id: number;

  @IsNumber()
  progress_percentage: number;

  @IsNumber()
  price_paid: number;

  @IsInt()
  payment_method_id: number;

  @IsBoolean()
  certificate_issued: boolean;

  @IsOptional()
  @IsString()
  certificate_url?: string;

  @IsInt()
  status: number;
}