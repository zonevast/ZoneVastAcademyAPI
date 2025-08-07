export class ReviewEntity {
    review_id: number;
    course_id: number;
    user_id: number;
    rating: number;
    comment?: string;
    created_at: Date;
    updated_at: Date;
}