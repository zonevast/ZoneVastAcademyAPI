import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateWishlistDto } from './dtos/create-wishlist.dto';
import { UpdateWishlistDto } from './dtos/update-wishlist.dto';

@Injectable()
export class WishlistService {
  constructor(private prisma: PrismaService) {}

  create(createWishlistDto: CreateWishlistDto) {
    return this.prisma.wishlist.create({ data: createWishlistDto });
  }

  findAll() {
    return this.prisma.wishlist.findMany();
  }

  findOne(id: number) {
    return this.prisma.wishlist.findUnique({ where: { wishlist_id: id } });
  }

  update(id: number, updateWishlistDto: UpdateWishlistDto) {
    return this.prisma.wishlist.update({ where: { wishlist_id: id }, data: updateWishlistDto });
  }

  remove(id: number) {
    return this.prisma.wishlist.delete({ where: { wishlist_id: id } });
  }
}