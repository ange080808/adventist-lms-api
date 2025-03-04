import { Module } from '@nestjs/common';
import { StudentLessonsService } from './student-lessons.service';
import { StudentLessonsController } from './student-lessons.controller';

@Module({
  controllers: [StudentLessonsController],
  providers: [StudentLessonsService],
})
export class StudentLessonsModule {}
