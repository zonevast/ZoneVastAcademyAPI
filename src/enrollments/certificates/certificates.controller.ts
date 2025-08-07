import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from './dtos/create-certificate.dto';
import { UpdateCertificateDto } from './dtos/update-certificate.dto';

@Controller('certificates')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}

  @Post()
  create(@Body() createCertificateDto: CreateCertificateDto) {
    return this.certificatesService.create(createCertificateDto);
  }

  @Get()
  findAll() {
    return this.certificatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCertificateDto: UpdateCertificateDto) {
    return this.certificatesService.update(+id, updateCertificateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificatesService.remove(+id);
  }
}