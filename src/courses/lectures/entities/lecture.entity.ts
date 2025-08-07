export class LectureEntity {
    lecture_id: number;
    section_id: number;
    title: string;
    description?: string;
    video_url: string;
    duration_minutes: number;
    order_index: number;
    resources?: JSON;
    is_active: boolean;
    created_at: Date;
}