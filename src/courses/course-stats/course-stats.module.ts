import { Module } from '@nestjs/common';
import { CourseStatsService } from './course-stats.service';
import { CourseStatsController } from './course-stats.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CourseStatsController],
  providers: [CourseStatsService],
})
export class CourseStatsModule {}