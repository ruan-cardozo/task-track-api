import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from '../task.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        {
          provide: getRepositoryToken(Task),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({ id: 1 }),
          },
        },
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of tasks', async () => {
    expect(await service.findAll()).toEqual([]);
  });

  it('should return a single task', async () => {
    expect(await service.findOne(1)).toEqual({ id: 1 });
  });
});
