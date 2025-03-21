import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Task status',
    description: 'The status of the task',
  })
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({
    example: 'Task title',
    description: 'The title of the task',
  }) 
  @IsNotEmpty()
  @IsString()
  title: string;
 
  @ApiProperty({
    example: '2021-07-01',
    description: 'The due date of the task',
  })
  @IsNotEmpty()
  dueDate: Date;

  @ApiProperty({
    example: 'To check if the task is completed or not',
    description: 'True or false to check if the task is completed or not',
  })
  completed: boolean;

  @ApiProperty({
    example: 'Task description',
    description: 'The description of the task',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}
