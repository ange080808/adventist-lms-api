import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStudentVideoDto {
  @IsInt()
  @IsNotEmpty()
  studentId: number;

  @IsInt()
  @IsNotEmpty()
  videoId: number;

  @IsBoolean()
  @IsOptional()
  isCompleted: boolean;
}
