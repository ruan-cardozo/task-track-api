import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { LoginValidationMiddleware } from './middlewares/login-validation.middleware';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not defined');
}

console.log('secret', process.env.JWT_SECRET);

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '8h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoginValidationMiddleware)
      .forRoutes({ path: 'login', method: RequestMethod.POST });
  }
}
