import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.repository.create(createUserDto);
    return this.repository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const databaseUser = await this.repository.findOne({ where: { id } });

    if (databaseUser) {
      const updatedUser = this.repository.merge(databaseUser, updateUserDto);
      return this.repository.save(updatedUser);
    }
    throw new Error(`User with id ${id} not found.`);
  }
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
