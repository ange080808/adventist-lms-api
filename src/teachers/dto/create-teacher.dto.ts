import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTeacherDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  bio: string;

  @IsString()
  @IsOptional()
  profileUrl: string;

  @IsString()
  @IsNotEmpty()
  employeeId: string;
}
