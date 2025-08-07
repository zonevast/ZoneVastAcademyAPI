export class DiscussionEntity {
    discussion_id: number;
    course_id: number;
    user_id: number;
    title: string;
    content: string;
    is_pinned: boolean;
    is_answered: boolean;
    reply_count?: number;
    last_reply_at?: Date;
    created_at: Date;
}