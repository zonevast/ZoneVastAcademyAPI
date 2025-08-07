import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCourseSectionDto } from './dtos/create-course-section.dto';
import { UpdateCourseSectionDto } from './dtos/update-course-section.dto';

@Injectable()
export class CourseSectionsService {
  constructor(private prisma: PrismaService) {}

  create(createCourseSectionDto: CreateCourseSectionDto) {
    return this.prisma.courseSection.create({ data: createCourseSectionDto });
  }

  findAll() {
    return this.prisma.courseSection.findMany();
  }

  findOne(id: number) {
    return this.prisma.courseSection.findUnique({ where: { section_id: id } });
  }

  update(id: number, updateCourseSectionDto: UpdateCourseSectionDto) {
    return this.prisma.courseSection.update({ where: { section_id: id }, data: updateCourseSectionDto });
  }

  remove(id: number) {
    return this.prisma.courseSection.delete({ where: { section_id: id } });
  }
}