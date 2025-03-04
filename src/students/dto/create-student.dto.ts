import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  studentId: string;

  @IsString()
  @IsOptional()
  bio: string;

  @IsString()
  @IsOptional()
  avatar: string;

  @IsInt()
  @IsOptional()
  teacherId: number;

  @IsInt()
  @IsOptional()
  points: number;
}
