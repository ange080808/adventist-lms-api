import { Injectable } from '@nestjs/common';
import { CreateStudentVideoDto } from './dto/create-student-video.dto';
import { UpdateStudentVideoDto } from './dto/update-student-video.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class StudentVideosService {
  constructor(private db: DatabaseService) {}

  create(createStudentVideoDto: CreateStudentVideoDto) {
    return this.db.studentVideo.create({
      data: createStudentVideoDto,
    });
  }

  findAll() {
    return this.db.studentVideo.findMany({
      include: {
        student: {
          include: {
            user: true,
          },
        },
        video: true,
      },
    });
  }

  findOne(id: number) {
    return this.db.studentVideo.findUniqueOrThrow({
      where: { id },
      include: {
        student: {
          include: {
            user: true,
          },
        },
        video: true,
      },
    });
  }

  update(id: number, updateStudentVideoDto: UpdateStudentVideoDto) {
    return this.db.studentVideo.update({
      where: { id },
      data: updateStudentVideoDto,
    });
  }

  remove(id: number) {
    return this.db.studentVideo.delete({
      where: { id },
    });
  }
}
