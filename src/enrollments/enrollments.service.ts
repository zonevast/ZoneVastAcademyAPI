import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEnrollmentDto } from './dtos/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dtos/update-enrollment.dto';

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService) {}

  create(createEnrollmentDto: CreateEnrollmentDto) {
    return this.prisma.enrollment.create({ data: createEnrollmentDto });
  }

  findAll() {
    return this.prisma.enrollment.findMany();
  }

  findOne(id: number) {
    return this.prisma.enrollment.findUnique({ where: { enrollment_id: id } });
  }

  update(id: number, updateEnrollmentDto: UpdateEnrollmentDto) {
    return this.prisma.enrollment.update({
      where: { enrollment_id: id },
      data: updateEnrollmentDto,
    });
  }

  remove(id: number) {
    return this.prisma.enrollment.delete({ where: { enrollment_id: id } });
  }
}
