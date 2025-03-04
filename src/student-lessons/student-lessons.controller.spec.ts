import { Test, TestingModule } from '@nestjs/testing';
import { StudentLessonsController } from './student-lessons.controller';
import { StudentLessonsService } from './student-lessons.service';

describe('StudentLessonsController', () => {
  let controller: StudentLessonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentLessonsController],
      providers: [StudentLessonsService],
    }).compile();

    controller = module.get<StudentLessonsController>(StudentLessonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
