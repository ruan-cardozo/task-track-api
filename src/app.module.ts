import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'task_db',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: 'postgres',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
