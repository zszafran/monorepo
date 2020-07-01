import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as compression from 'compression';
import * as express from 'express';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';

import { AppModule } from './app.module';

async function bootstrap() {
  const server = express();

  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  // const httpsOptions = {
  //   key: fs.readFileSync('./secrets/private-key.pem'),
  //   cert: fs.readFileSync('./secrets/public-certificate.pem'),
  // };

  app.enableCors({
    methods: 'GET',
    maxAge: 3600,
  });

  app.use(compression());

  await app.init();

  http.createServer(server).listen(8080);
  // https.createServer(httpsOptions, server).listen(8484);

  Logger.log(
    `Running Node ${process.version} on ${process.platform} ${process.arch}`,
  );

  Logger.log(`Access the application at http://localhost:8080`);
  // Logger.log(`Access the application at https://localhost:8484`);
}

bootstrap();
