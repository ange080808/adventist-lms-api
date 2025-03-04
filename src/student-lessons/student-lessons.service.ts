import { Injectable } from '@nestjs/common';
import { CreateStudentLessonDto } from './dto/create-student-lesson.dto';
import { UpdateStudentLessonDto } from './dto/update-student-lesson.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class StudentLessonsService {
  constructor(private db: DatabaseService) {}

  create(createStudentLessonDto: CreateStudentLessonDto) {
    return this.db.studentLesson.create({
      data: createStudentLessonDto,
    });
  }

  findAll() {
    return this.db.studentLesson.findMany({
      include: {
        lesson: true,
        student: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.db.studentLesson.findUniqueOrThrow({
      where: { id },
      include: {
        lesson: true,
        student: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  update(id: number, updateStudentLessonDto: UpdateStudentLessonDto) {
    return this.db.studentLesson.update({
      where: { id },
      data: updateStudentLessonDto,
    });
  }

  remove(id: number) {
    return this.db.studentLesson.delete({
      where: { id },
    });
  }
}
