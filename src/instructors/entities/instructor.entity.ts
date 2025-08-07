export class InstructorEntity {
    instructor_id: number;
    user_id: number;
    title?: string;
    expertise?: JSON;
    rating?: number;
    is_featured: boolean;
    created_at: Date;
    updated_at: Date;
}