import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class StudentsService {
  constructor(private db: DatabaseService) {}

  create(createStudentDto: CreateStudentDto) {
    return this.db.student.create({
      data: createStudentDto,
    });
  }

  findAll() {
    return this.db.student.findMany({
      include: {
        user: true,
        teacher: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.db.student.findUniqueOrThrow({
      where: { id },
      include: {
        user: true,
        teacher: {
          include: {
            user: true,
          },
        },
        results: true,
      },
    });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.db.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  remove(id: number) {
    return this.db.student.delete({
      where: { id },
    });
  }
}
