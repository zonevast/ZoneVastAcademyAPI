import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CourseStatsModule } from './course-stats/course-stats.module';
import { CategoriesModule } from './categories/categories.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { CourseSectionsModule } from './course-sections/course-sections.module';
import { LecturesModule } from './lectures/lectures.module';

@Module({
  imports: [PrismaModule, CourseStatsModule, CategoriesModule, SubcategoriesModule, CourseSectionsModule, LecturesModule],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}