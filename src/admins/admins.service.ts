import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AdminsService {
  constructor(private db: DatabaseService) {}

  create(createAdminDto: CreateAdminDto) {
    return this.db.admin.create({
      data: createAdminDto,
    });
  }

  findAll() {
    return this.db.admin.findMany({
      include: {
        user: true,
      },
    });
  }

  findOne(id: number) {
    return this.db.admin.findUniqueOrThrow({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.db.admin.update({
      where: { id },
      data: updateAdminDto,
    });
  }

  remove(id: number) {
    return this.db.admin.delete({
      where: { id },
    });
  }
}
