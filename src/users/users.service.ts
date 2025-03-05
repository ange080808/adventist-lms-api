import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from 'src/database/database.service';
import { passwordEncryption } from 'src/lib/password-encryption';

@Injectable()
export class UsersService {
  constructor(private db: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    const { password, ...data } = createUserDto;

    const passwordHashed = await passwordEncryption(password);

    return this.db.user.create({
      data: {
        ...data,
        password: passwordHashed,
      },
    });
  }

  findAll() {
    return this.db.user.findMany();
  }

  findOne(id: number) {
    return this.db.user.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        teacher: true,
        student: true,
        admin: true,
      },
    });
  }

  findOneByUsername(username: string) {
    return this.db.user.findFirst({
      where: {
        username,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.db.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.db.user.delete({
      where: {
        id,
      },
    });
  }
}
