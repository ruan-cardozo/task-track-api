import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  // let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            // mock implementation of AuthService methods if needed
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    // service = module.get<AuthService>(AuthService);
  });

  //trigger pipeline
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
