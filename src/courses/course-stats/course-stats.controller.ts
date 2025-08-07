import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseStatsService } from './course-stats.service';
import { CreateCourseStatDto } from './dtos/create-course-stat.dto';
import { UpdateCourseStatDto } from './dtos/update-course-stat.dto';

@Controller('course-stats')
export class CourseStatsController {
  constructor(private readonly courseStatsService: CourseStatsService) {}

  @Post()
  create(@Body() createCourseStatDto: CreateCourseStatDto) {
    return this.courseStatsService.create(createCourseStatDto);
  }

  @Get()
  findAll() {
    return this.courseStatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseStatsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseStatDto: UpdateCourseStatDto,
  ) {
    return this.courseStatsService.update(+id, updateCourseStatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseStatsService.remove(+id);
  }
}
