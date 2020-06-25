import { NgModule } from '@angular/core';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

import { RouterSerializer } from './router.serializer';

@NgModule({
  imports: [
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer,
      routerState: RouterState.Minimal,
    }),
  ],
})
export class RouterModule {}
