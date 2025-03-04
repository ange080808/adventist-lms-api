import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class LessonsService {
  constructor(private db: DatabaseService) {}

  create(createLessonDto: CreateLessonDto) {
    return this.db.lesson.create({
      data: createLessonDto,
    });
  }

  findAll() {
    return this.db.lesson.findMany();
  }

  findOne(id: number) {
    return this.db.lesson.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: number, updateLessonDto: UpdateLessonDto) {
    return this.db.lesson.update({
      where: { id },
      data: updateLessonDto,
    });
  }

  remove(id: number) {
    return this.db.lesson.delete({
      where: { id },
    });
  }
}
