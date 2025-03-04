import { Module } from '@nestjs/common';
import { StudentVideosService } from './student-videos.service';
import { StudentVideosController } from './student-videos.controller';

@Module({
  controllers: [StudentVideosController],
  providers: [StudentVideosService],
})
export class StudentVideosModule {}
