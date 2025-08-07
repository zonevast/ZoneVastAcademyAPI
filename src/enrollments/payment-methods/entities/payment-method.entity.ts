export class PaymentMethodEntity {
    payment_method_id: number;
    method_name: string;
    description?: string;
    icon_url: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}