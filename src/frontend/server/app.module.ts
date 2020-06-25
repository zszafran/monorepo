import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { AppServerModule } from 'monorepo/src/frontend/client/main.server';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'src/frontend/client/pwa'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
