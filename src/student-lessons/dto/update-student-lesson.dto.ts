import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentLessonDto } from './create-student-lesson.dto';

export class UpdateStudentLessonDto extends PartialType(CreateStudentLessonDto) {}
