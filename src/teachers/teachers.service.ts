import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TeachersService {
  constructor(private db: DatabaseService) {}

  create(createTeacherDto: CreateTeacherDto) {
    return this.db.teacher.create({
      data: createTeacherDto,
    });
  }

  findAll() {
    return this.db.teacher.findMany({
      include: {
        user: true,
        students: true,
      },
    });
  }

  findOne(id: number) {
    return this.db.teacher.findUniqueOrThrow({
      where: { id },
      include: {
        user: true,
        students: true,
      },
    });
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return this.db.teacher.update({
      where: { id },
      data: updateTeacherDto,
    });
  }

  remove(id: number) {
    return this.db.teacher.delete({
      where: { id },
    });
  }
}
