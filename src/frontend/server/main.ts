import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  app.enableCors({
    methods: 'GET',
    maxAge: 3600,
  });

  await app.listen(8080);

  Logger.log(
    `Running Node ${process.version} on ${process.platform} ${process.arch}`,
  );

  Logger.log(`Access the application at http://localhost:8080`);
}

bootstrap();
