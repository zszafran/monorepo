import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';

enableProdMode();

export { renderModule, renderModuleFactory } from '@angular/platform-server';
export { AppServerModule } from './app/app.server.module';
