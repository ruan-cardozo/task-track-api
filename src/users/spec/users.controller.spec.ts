import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { User } from '..//entities/user.entity';
import { jest } from '@jest/globals'; // Import the 'jest' package
import { Repository } from 'typeorm';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: 'UserRepository',
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all users', async () => {
    const result: User[] = [];
    jest
      .spyOn(service, 'findAll')
      .mockImplementation(() => Promise.resolve(result));
    expect(await controller.findAll()).toBe(result);
  });

  it('should get one user', async () => {
    const result: User = {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      password: 'password',
      created_at: new Date(),
      updated_at: new Date(),
    };
    jest
      .spyOn(service, 'findOne')
      .mockImplementation(() => Promise.resolve(result));
    expect(await controller.findOne(1)).toBe(result);
  });

  it('should create a user', async () => {
    const result: User = {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      password: 'password',
      created_at: new Date(),
      updated_at: new Date(),
    };
    jest
      .spyOn(service, 'create')
      .mockImplementation(() => Promise.resolve(result));
    expect(
      await controller.create({
        name: 'ruan',
        email: 'ruanvcardozo@gmail.com',
        password: 'wordpass',
      }),
    ).toBe(result);
  });

  it('should update a user', async () => {
    const result: User = {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      password: 'password',
      created_at: new Date(),
      updated_at: new Date(),
    };
    jest
      .spyOn(service, 'update')
      .mockImplementation(() => Promise.resolve(result));
    expect(
      await controller.update(1, {
        name: 'ruan',
        email: 'ruan@email.com.br',
        password: 'wordpass',
      }),
    ).toBe(result);
  });

  it('should remove a user', async () => {
    const result: User = {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      password: 'password',
      created_at: new Date(),
      updated_at: new Date(),
    };
    jest
      .spyOn(service, 'delete')
      .mockImplementation((): Promise<any> => Promise.resolve(result)); // Specify the return type as Promise<any>
    expect(await controller.delete(1)).toBe(result);
  });
});
