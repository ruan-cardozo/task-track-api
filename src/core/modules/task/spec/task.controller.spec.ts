import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from '../task.controller';
import { TaskService } from '../task.service';
import { Task } from '../entities/task.entity';
import { DeleteResult, Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe.only('TaskController', () => {
  let controller: TaskController;
  let service: TaskService;
  let repository: Repository<Task>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        TaskService,
        {
          provide: getRepositoryToken(Task),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<TaskController>(TaskController);
    service = module.get<TaskService>(TaskService);
    repository = module.get<Repository<Task>>(getRepositoryToken(Task));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all tasks', async () => {
    const result: Task[] = [];
    jest
      .spyOn(service, 'findAll')
      .mockImplementation(() => Promise.resolve(result));
    expect(await controller.findAll()).toBe(result);
  });

  it('should get one task', async () => {
    const result: Task = {
      id: 1,
      status: 'In Progress',
      completed: false,
      description: 'Complete the project',
      dueDate: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
      title: '',
    };
    jest
      .spyOn(service, 'findOne')
      .mockImplementation(() => Promise.resolve(result));
    expect(await controller.findOne(1)).toBe(result);
  });

  it('should create a task', async () => {
    const result: Task = {
      id: 1,
      status: 'In Progress',
      completed: false,
      description: 'Complete the project',
      dueDate: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
      title: '',
    };
    jest
      .spyOn(service, 'create')
      .mockImplementation(() => Promise.resolve(result));
    expect(
      await controller.create({
        status: 'In Progress',
        completed: false,
        description: 'Complete the project',
        dueDate: new Date(),
        title: '',
      }),
    ).toBe(result);
  });

  it('should update a task', async () => {
    const result: Task = {
      id: 1,
      status: 'In Progress',
      completed: false,
      description: 'Complete the project',
      dueDate: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
      title: '',
    };
    jest
      .spyOn(service, 'update')
      .mockImplementation(() => Promise.resolve(result));
    expect(
      await controller.update(1, {
        status: 'In Progress',
        completed: false,
        description: 'Complete the project',
        dueDate: new Date(),
        title: '',
      }),
    ).toBe(result);
  });

  it('should remove a task', async () => {
    const result: DeleteResult = {
      raw: null,
      affected: 1,
    };
    jest
      .spyOn(service, 'remove')
      .mockImplementation(() => Promise.resolve(result));
    expect(await controller.remove(1)).toBe(result);
  });
});
