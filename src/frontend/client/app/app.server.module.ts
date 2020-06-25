import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppProdModule } from './app.prod.module';

@NgModule({
  imports: [AppProdModule, ServerModule, ServerTransferStateModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
