import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    TransferHttpCacheModule,
    BrowserModule.withServerTransition({ appId: 'angular-app' }),
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
