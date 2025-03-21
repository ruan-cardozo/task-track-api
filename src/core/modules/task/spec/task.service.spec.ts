import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from '../task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],
    }).compile();

    service = module.get<TaskService>(TaskService);
    service.findAll = jest.fn().mockReturnValue([]);
    service.findOne = jest.fn().mockReturnValue([1]);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
 
  it('should be defined', () => {
    expect(service.findAll()).toBe([]);
  });

  it('should be defined', () => {
    expect(service.findOne(1)).toBe([1]);
  });
});
