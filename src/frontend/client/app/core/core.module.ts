import { ContainersModule } from './containers';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ContainersModule],
  exports: [ContainersModule],
})
export class CoreModule {}
