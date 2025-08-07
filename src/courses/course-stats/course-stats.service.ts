import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCourseStatDto } from './dtos/create-course-stat.dto';
import { UpdateCourseStatDto } from './dtos/update-course-stat.dto';

@Injectable()
export class CourseStatsService {
  constructor(private prisma: PrismaService) {}

  create(createCourseStatDto: CreateCourseStatDto) {
    return this.prisma.courseStats.create({ data: createCourseStatDto });
  }

  findAll() {
    return this.prisma.courseStats.findMany();
  }

  findOne(id: number) {
    return this.prisma.courseStats.findUnique({ where: { id } });
  }

  update(id: number, updateCourseStatDto: UpdateCourseStatDto) {
    return this.prisma.courseStats.update({ where: { id }, data: updateCourseStatDto });
  }

  remove(id: number) {
    return this.prisma.courseStats.delete({ where: { id } });
  }
}