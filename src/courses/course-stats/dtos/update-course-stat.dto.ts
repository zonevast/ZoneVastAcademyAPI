import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseStatDto } from './create-course-stat.dto';

export class UpdateCourseStatDto extends PartialType(CreateCourseStatDto) {}