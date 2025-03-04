import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  employeeId: string;
}
