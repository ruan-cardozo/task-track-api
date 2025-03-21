import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './core/modules/users/users.module';
import { TaskModule } from './core/modules/task/task.module';
import { AuthModule } from './core/modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './core/modules/auth/guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'task_db',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: 'postgres',
      autoLoadEntities: true,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      migrations: [`${__dirname}/migration/*{.ts,.js}`],
      migrationsRun: true,
      synchronize: true,
    }),
    UsersModule,
    TaskModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
