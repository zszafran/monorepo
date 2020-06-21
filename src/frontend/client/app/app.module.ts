import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TransferHttpCacheModule } from '@nguniversal/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    TransferHttpCacheModule,
    StoreModule.forRoot({}),
    BrowserModule.withServerTransition({ appId: 'angular-app' }),
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
