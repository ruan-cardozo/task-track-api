import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  dueDate: Date;

  completed: boolean;

  @IsNotEmpty()
  description: string;
}
