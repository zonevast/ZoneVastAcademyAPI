import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateLectureDto } from './dtos/create-lecture.dto';
import { UpdateLectureDto } from './dtos/update-lecture.dto';

@Injectable()
export class LecturesService {
  constructor(private prisma: PrismaService) {}

  create(createLectureDto: CreateLectureDto) {
    return this.prisma.lecture.create({ data: createLectureDto });
  }

  findAll() {
    return this.prisma.lecture.findMany();
  }

  findOne(id: number) {
    return this.prisma.lecture.findUnique({ where: { lecture_id: id } });
  }

  update(id: number, updateLectureDto: UpdateLectureDto) {
    return this.prisma.lecture.update({ where: { lecture_id: id }, data: updateLectureDto });
  }

  remove(id: number) {
    return this.prisma.lecture.delete({ where: { lecture_id: id } });
  }
}