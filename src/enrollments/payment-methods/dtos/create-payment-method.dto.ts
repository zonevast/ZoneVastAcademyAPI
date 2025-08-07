import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreatePaymentMethodDto {
  @IsString()
  method_name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  icon_url: string;

  @IsBoolean()
  is_active: boolean;
}