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
import { StudentVideosService } from './student-videos.service';
import { CreateStudentVideoDto } from './dto/create-student-video.dto';
import { UpdateStudentVideoDto } from './dto/update-student-video.dto';

@Controller('api/student-videos')
export class StudentVideosController {
  constructor(private readonly studentVideosService: StudentVideosService) {}

  @Post()
  create(@Body() createStudentVideoDto: CreateStudentVideoDto) {
    return this.studentVideosService.create(createStudentVideoDto);
  }

  @Get()
  findAll() {
    return this.studentVideosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentVideosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentVideoDto: UpdateStudentVideoDto,
  ) {
    return this.studentVideosService.update(+id, updateStudentVideoDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentVideosService.remove(+id);
  }
}
