export class CertificateEntity {
    certificate_id: number;
    enrollment_id: number;
    certificate_number: number;
    issued_date: Date;
    certificate_url: string;
    verification_url: string;
    is_valid: boolean;
}