import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({ data: createCategoryDto });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({ where: { category_id: id } });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({ where: { category_id: id }, data: updateCategoryDto });
  }

  remove(id: number) {
    return this.prisma.category.delete({ where: { category_id: id } });
  }
}