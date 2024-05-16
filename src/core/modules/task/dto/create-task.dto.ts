import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  dueDate: Date;

  @IsBoolean()
  completed: boolean;

  @IsNotEmpty()
  description: string;
}
