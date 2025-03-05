import { Injectable } from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ResultsService {
  constructor(private db: DatabaseService) {}

  create(createResultDto: CreateResultDto) {
    return this.db.result.create({
      data: createResultDto,
    });
  }

  findAll() {
    return this.db.result.findMany({
      include: {
        student: {
          include: { user: true },
        },
        activity: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} result`;
  }

  update(id: number, updateResultDto: UpdateResultDto) {
    return `This action updates a #${id} result`;
  }

  remove(id: number) {
    return `This action removes a #${id} result`;
  }
}
