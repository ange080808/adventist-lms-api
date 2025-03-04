import { Test, TestingModule } from '@nestjs/testing';
import { StudentVideosService } from './student-videos.service';

describe('StudentVideosService', () => {
  let service: StudentVideosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentVideosService],
    }).compile();

    service = module.get<StudentVideosService>(StudentVideosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
