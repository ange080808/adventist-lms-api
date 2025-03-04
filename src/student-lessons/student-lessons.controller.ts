import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { StudentLessonsService } from './student-lessons.service';
import { CreateStudentLessonDto } from './dto/create-student-lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student-lesson.dto';

@Controller('api/student-lessons')
export class StudentLessonsController {
  constructor(private readonly studentLessonsService: StudentLessonsService) {}

  @Post()
  create(@Body() createStudentLessonDto: CreateStudentLessonDto) {
    return this.studentLessonsService.create(createStudentLessonDto);
  }

  @Get()
  findAll() {
    return this.studentLessonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentLessonsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentLessonDto: UpdateStudentLessonDto,
  ) {
    return this.studentLessonsService.update(+id, updateStudentLessonDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentLessonsService.remove(+id);
  }
}
