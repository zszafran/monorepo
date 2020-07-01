import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeLogger } from 'ngrx-store-logger';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return storeLogger({
    collapsed: true,
  })(reducer);
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  imports: [
    AppModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
      logOnly: false,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppDevModule {}
