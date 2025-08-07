export class LectureProgressEntity {
    progress_id: number;
    enrollment_id: number;
    lecture_id: number;
    is_completed: boolean;
    watch_time_seconds?: number;
    completion_date?: Date;
    last_position_seconds?: number;
}