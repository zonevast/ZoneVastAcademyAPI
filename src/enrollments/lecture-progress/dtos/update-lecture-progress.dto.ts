import { PartialType } from '@nestjs/mapped-types';
import { CreateLectureProgressDto } from './create-lecture-progress.dto';

export class UpdateLectureProgressDto extends PartialType(CreateLectureProgressDto) {}