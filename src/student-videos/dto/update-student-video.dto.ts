import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentVideoDto } from './create-student-video.dto';

export class UpdateStudentVideoDto extends PartialType(CreateStudentVideoDto) {}
