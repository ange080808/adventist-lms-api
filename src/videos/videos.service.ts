import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class VideosService {
  constructor(private db: DatabaseService) {}

  create(createVideoDto: CreateVideoDto) {
    return this.db.video.create({
      data: createVideoDto,
    });
  }

  findAll() {
    return this.db.video.findMany();
  }

  findOne(id: number) {
    return this.db.video.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: number, updateVideoDto: UpdateVideoDto) {
    return this.db.video.update({
      where: { id },
      data: updateVideoDto,
    });
  }

  remove(id: number) {
    return this.db.video.delete({
      where: { id },
    });
  }
}
