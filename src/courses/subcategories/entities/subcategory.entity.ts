export class SubcategoryEntity {
    subcategory_id: number;
    category_id: number;
    name: string;
    slug: string;
    description?: string;
    is_active: boolean;
    created_at: Date;
}