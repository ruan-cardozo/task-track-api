import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { MoreThan, Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './enum/task.enum';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly repository: Repository<Task>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findAllWithDateFilter(filter: Date) {
    return this.repository.find({ where: { created_at: MoreThan(filter) } });
  }

  async findTasksByStatus(status: TaskStatus) {
    let statusToFilter = '';

    switch (status) {

      case TaskStatus.todo:
        statusToFilter = 'A fazer';
        break;
      case TaskStatus.doing:
        statusToFilter = 'Em andamento';
        break;
      case TaskStatus.done:
        statusToFilter = 'Concluído';
        break;
    }

    return this.repository.find({ where: { status: statusToFilter } });
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
}
