import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './models/UserPayload';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async login(user: User) {
    const userPayload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name
    };

    return {
      access_token: this.jwtService.sign(userPayload, {
        secret: process.env.JWT_SECRET,
      }),
      user: userPayload,
    };
  }

  async validateUser(email: string, password: string) {
    const databaseUser = await this.usersService.findUserByEmail(email);

    if (databaseUser) {
      const isPasswordValid = await bcrypt.compare(
        password,
        databaseUser.password,
      );

      if (isPasswordValid) {
        return {
          ...databaseUser,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedException('Email address or password is incorrect');
  }
}
