import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'task' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'status', nullable: false })
  status: string;

  @Column({ name: 'completed', nullable: false })
  completed: boolean;

  @Column({ name: 'description', nullable: false })
  description: string;

  @Column({ name: 'due_date', nullable: false })
  dueDate: Date;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
