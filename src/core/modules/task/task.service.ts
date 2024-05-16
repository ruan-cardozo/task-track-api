import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { MoreThan, Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly repository: Repository<Task>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  create(createTaskDto: CreateTaskDto) {
    const task = this.repository.create(createTaskDto);
    return this.repository.save(task);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const databaseTask = await this.repository.findOne({ where: { id } });

    if (databaseTask) {
      const updatedTask = this.repository.merge(databaseTask, updateTaskDto);
      return this.repository.save(updatedTask);
    }
    throw new Error(`Task with id ${id} not found.`);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }

  findTodayTasks() {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
  
    return this.repository.find({
      where: {
        created_at: MoreThan(startOfDay),
      },
    });
  }
}
