import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PageModule } from '../shared/components/page';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, PageModule],
})
export class HomeModule {}
