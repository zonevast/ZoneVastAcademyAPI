import { IsInt, IsString, IsBoolean } from 'class-validator';

export class CreateCertificateDto {
  @IsInt()
  enrollment_id: number;

  @IsInt()
  certificate_number: number;

  @IsString()
  issued_date: string;

  @IsString()
  certificate_url: string;

  @IsString()
  verification_url: string;

  @IsBoolean()
  is_valid: boolean;
}