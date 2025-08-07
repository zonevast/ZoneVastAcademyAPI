import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { UsersModule }mport { UsersModule } from './users/user.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { ReviewsModule } from './reviews/reviews.module';
import { InstructorsModule } from './instructors/instructors.module';

@Module({
  imports: [CoursesModule, UsersModule, EnrollmentsModule, ReviewsModule, InstructorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
