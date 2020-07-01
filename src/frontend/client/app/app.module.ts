import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    TransferHttpCacheModule,
    BrowserModule.withServerTransition({ appId: 'angular-app' }),
    ServiceWorkerModule.register('ngsw-worker.js'),
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
