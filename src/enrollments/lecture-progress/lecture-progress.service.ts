import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLectureProgressDto } from './dtos/create-lecture-progress.dto';
import { UpdateLectureProgressDto } from './dtos/update-lecture-progress.dto';

@Injectable()
export class LectureProgressService {
  constructor(private prisma: PrismaService) {}

  create(createLectureProgressDto: CreateLectureProgressDto) {
    return this.prisma.lectureProgress.create({ data: createLectureProgressDto });
  }

  findAll() {
    return this.prisma.lectureProgress.findMany();
  }

  findOne(id: number) {
    return this.prisma.lectureProgress.findUnique({ where: { progress_id: id } });
  }

  update(id: number, updateLectureProgressDto: UpdateLectureProgressDto) {
    return this.prisma.lectureProgress.update({ where: { progress_id: id }, data: updateLectureProgressDto });
  }

  remove(id: number) {
    return this.prisma.lectureProgress.delete({ where: { progress_id: id } });
  }
}