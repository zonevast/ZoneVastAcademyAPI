export class CategoryEntity {
    category_id: number;
    name: string;
    slug: string;
    description?: string;
    icon_url?: string;
    is_active: boolean;
    created_at: Date;
}