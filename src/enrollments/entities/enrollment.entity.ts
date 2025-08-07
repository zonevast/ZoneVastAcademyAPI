export class EnrollmentEntity {
    enrollment_id: number;
    user_id: number;
    course_id: number;
    progress_percentage: number;
    last_accessed: Date;
    price_paid: number;
    payment_method_id: number;
    certificate_issued: boolean;
    certificate_url?: string;
    status: number;
    enrollment_date: Date;
}