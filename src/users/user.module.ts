import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { WishlistModule } from './wishlist/wishlist.module';

@Module({
  imports: [PrismaModule, WishlistModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
