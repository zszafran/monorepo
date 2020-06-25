import { NgModule } from '@angular/core';

import { ContainersModule } from './containers';
import { StoreModule } from './store';

@NgModule({
  imports: [ContainersModule, StoreModule],
  exports: [ContainersModule],
})
export class CoreModule {}
