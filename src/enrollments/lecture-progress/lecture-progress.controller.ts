import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LectureProgressService } from './lecture-progress.service';
import { CreateLectureProgressDto } from './dtos/create-lecture-progress.dto';
import { UpdateLectureProgressDto } from './dtos/update-lecture-progress.dto';

@Controller('lecture-progress')
export class LectureProgressController {
  constructor(private readonly lectureProgressService: LectureProgressService) {}

  @Post()
  create(@Body() createLectureProgressDto: CreateLectureProgressDto) {
    return this.lectureProgressService.create(createLectureProgressDto);
  }

  @Get()
  findAll() {
    return this.lectureProgressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lectureProgressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLectureProgressDto: UpdateLectureProgressDto) {
    return this.lectureProgressService.update(+id, updateLectureProgressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lectureProgressService.remove(+id);
  }
}