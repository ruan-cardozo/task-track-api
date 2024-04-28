import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPasswordToSave } from 'src/core/common/helpers/hash-password.helper';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.repository.create(createUserDto);
    user.password = await hashPasswordToSave(user.password);

    return this.repository.save(user);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  async findUserByEmail(email: string) {
    return await this.repository.findOneOrFail({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const databaseUser = await this.repository.findOne({ where: { id } });

    if (databaseUser) {
      const updatedUser = this.repository.merge(databaseUser, updateUserDto);
      return this.repository.save(updatedUser);
    }
    throw new Error(`User with id ${id} not found.`);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }
}