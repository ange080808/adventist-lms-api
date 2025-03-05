import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateResultDto {
  @IsInt()
  @IsNotEmpty()
  studentId: number;

  @IsInt()
  @IsNotEmpty()
  activityId: number;

  @IsInt()
  @IsNotEmpty()
  score: number;
}
