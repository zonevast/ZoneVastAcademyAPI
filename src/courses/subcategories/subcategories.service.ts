import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSubcategoryDto } from './dtos/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dtos/update-subcategory.dto';

@Injectable()
export class SubcategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createSubcategoryDto: CreateSubcategoryDto) {
    return this.prisma.subcategory.create({ data: createSubcategoryDto });
  }

  findAll() {
    return this.prisma.subcategory.findMany();
  }

  findOne(id: number) {
    return this.prisma.subcategory.findUnique({ where: { subcategory_id: id } });
  }

  update(id: number, updateSubcategoryDto: UpdateSubcategoryDto) {
    return this.prisma.subcategory.update({ where: { subcategory_id: id }, data: updateSubcategoryDto });
  }

  remove(id: number) {
    return this.prisma.subcategory.delete({ where: { subcategory_id: id } });
  }
}