import { Prisma } from '@prisma/client';

export class CourseEntity {
    id: number;
    title: string;
    slug: string;
    short_description?: string;
    long_description?: string;
    instructor_id: number;
    subcategory_id: number;
    thumbnail_url?: string;
    preview_video_url?: string;
    level: number;
    price: number;
    rating: number;
    certificate_provided: boolean;
    status: number;
    created_at?: string | Date;
    updated_at?: string | Date;
    published_at?: string | Date;
}