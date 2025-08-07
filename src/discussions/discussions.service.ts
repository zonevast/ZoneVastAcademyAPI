import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDiscussionDto } from './dtos/create-discussion.dto';
import { UpdateDiscussionDto } from './dtos/update-discussion.dto';

@Injectable()
export class DiscussionsService {
  constructor(private prisma: PrismaService) {}

  create(createDiscussionDto: CreateDiscussionDto) {
    return this.prisma.discussion.create({ data: createDiscussionDto });
  }

  findAll() {
    return this.prisma.discussion.findMany();
  }

  findOne(id: number) {
    return this.prisma.discussion.findUnique({ where: { discussion_id: id } });
  }

  update(id: number, updateDiscussionDto: UpdateDiscussionDto) {
    return this.prisma.discussion.update({
      where: { discussion_id: id },
      data: updateDiscussionDto,
    });
  }

  remove(id: number) {
    return this.prisma.discussion.delete({ where: { discussion_id: id } });
  }
}