import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateReviewDto } from './dtos/create-review.dto';
import { UpdateReviewDto } from './dtos/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  create(createReviewDto: CreateReviewDto) {
    return this.prisma.review.create({ data: createReviewDto });
  }

  findAll() {
    return this.prisma.review.findMany();
  }

  findOne(id: number) {
    return this.prisma.review.findUnique({ where: { review_id: id } });
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.prisma.review.update({ where: { review_id: id }, data: updateReviewDto });
  }

  remove(id: number) {
    return this.prisma.review.delete({ where: { review_id: id } });
  }
}