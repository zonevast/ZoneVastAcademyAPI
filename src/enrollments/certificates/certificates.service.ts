import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCertificateDto } from './dtos/create-certificate.dto';
import { UpdateCertificateDto } from './dtos/update-certificate.dto';

@Injectable()
export class CertificatesService {
  constructor(private prisma: PrismaService) {}

  create(createCertificateDto: CreateCertificateDto) {
    return this.prisma.certificate.create({ data: createCertificateDto });
  }

  findAll() {
    return this.prisma.certificate.findMany();
  }

  findOne(id: number) {
    return this.prisma.certificate.findUnique({ where: { certificate_id: id } });
  }

  update(id: number, updateCertificateDto: UpdateCertificateDto) {
    return this.prisma.certificate.update({ where: { certificate_id: id }, data: updateCertificateDto });
  }

  remove(id: number) {
    return this.prisma.certificate.delete({ where: { certificate_id: id } });
  }
}