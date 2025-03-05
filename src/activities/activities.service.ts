import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ActivitiesService {
  constructor(private db: DatabaseService) {}

  create(createActivityDto: CreateActivityDto) {
    return 'This action adds a new activity';
  }

  findAll() {
    return this.db.activity.findMany({});
  }

  findOne(id: number) {
    return this.db.activity.findUniqueOrThrow({
      where: { id },
      include: {
        results: {
          include: {
            student: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return this.db.activity.update({
      where: { id },
      data: updateActivityDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
