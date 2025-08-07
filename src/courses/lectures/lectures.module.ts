import { Module } from '@nestjs/common';
import { LecturesService } from './lectures.service';
import { LecturesController } from './lectures.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LecturesController],
  providers: [LecturesService],
})
export class LecturesModule {}