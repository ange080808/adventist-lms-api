import { Test, TestingModule } from '@nestjs/testing';
import { StudentLessonsService } from './student-lessons.service';

describe('StudentLessonsService', () => {
  let service: StudentLessonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentLessonsService],
    }).compile();

    service = module.get<StudentLessonsService>(StudentLessonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
