import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  apiTest(): string {
    return '<h1> API do TaskTrack </h1>';
  }
}
