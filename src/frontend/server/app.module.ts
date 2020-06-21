import { AngularUniversalModule } from '@nestjs/ng-universal';
import { AppController } from './app.controller';
import { AppServerModule } from 'monorepo/src/frontend/client/main.server';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { join } from 'path';

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
