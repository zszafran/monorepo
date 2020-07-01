import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ContainersModule } from './containers';
import { StoreModule } from './store';

@NgModule({
  imports: [ContainersModule, StoreModule, MatSnackBarModule],
  exports: [ContainersModule],
})
export class CoreModule {}
