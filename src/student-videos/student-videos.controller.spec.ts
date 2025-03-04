import { Test, TestingModule } from '@nestjs/testing';
import { StudentVideosController } from './student-videos.controller';
import { StudentVideosService } from './student-videos.service';

describe('StudentVideosController', () => {
  let controller: StudentVideosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentVideosController],
      providers: [StudentVideosService],
    }).compile();

    controller = module.get<StudentVideosController>(StudentVideosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
