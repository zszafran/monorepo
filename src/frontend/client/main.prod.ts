import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

enableProdMode();
platformBrowser().bootstrapModule(AppModule);
