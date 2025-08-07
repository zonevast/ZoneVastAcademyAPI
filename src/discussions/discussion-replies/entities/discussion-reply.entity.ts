export class DiscussionReplyEntity {
    reply_id: number;
    discussion_id: number;
    user_id: number;
    content: string;
    is_instructor_reply: boolean;
    is_solution: boolean;
    helpful_count: number;
    created_at: Date;
}