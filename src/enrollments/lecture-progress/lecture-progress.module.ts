import { Module } from '@nestjs/common';
import { LectureProgressService } from './lecture-progress.service';
import { LectureProgressController } from './lecture-progress.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LectureProgressController],
  providers: [LectureProgressService],
})
export class LectureProgressModule {}