export class CourseSectionEntity {
  section_id: number;
  course_id: number;
  title: string;
  description?: string;
  order_index: number;
  is_active: boolean;
  created_at: Date;
}
