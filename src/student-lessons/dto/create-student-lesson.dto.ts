import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStudentLessonDto {
  @IsInt()
  @IsNotEmpty()
  studentId: number;
  @IsInt()
  @IsNotEmpty()
  lessonId: number;
  @IsBoolean()
  @IsOptional()
  isCompleted: boolean;
}
