import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';

import { RouterModule } from './router';
import { EFFECTS } from './store.effects';
import { FEATURE_KEY } from './store.feature';
import { reducers } from './store.reducers';

@NgModule({
  imports: [
    NgrxStoreModule.forFeature(FEATURE_KEY, reducers),
    EffectsModule.forFeature(EFFECTS),
    RouterModule,
  ],
})
export class StoreModule {}
