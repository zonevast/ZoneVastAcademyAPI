import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInstructorDto } from './dtos/create-instructor.dto';
import { UpdateInstructorDto } from './dtos/update-instructor.dto';

@Injectable()
export class InstructorsService {
  constructor(private prisma: PrismaService) {}

  create(createInstructorDto: CreateInstructorDto) {
    return this.prisma.instructor.create({ data: createInstructorDto });
  }

  findAll() {
    return this.prisma.instructor.findMany();
  }

  findOne(id: number) {
    return this.prisma.instructor.findUnique({ where: { instructor_id: id } });
  }

  update(id: number, updateInstructorDto: UpdateInstructorDto) {
    return this.prisma.instructor.update({ where: { instructor_id: id }, data: updateInstructorDto });
  }

  remove(id: number) {
    return this.prisma.instructor.delete({ where: { instructor_id: id } });
  }
}