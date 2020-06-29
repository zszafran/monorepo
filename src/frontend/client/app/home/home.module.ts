import { NgModule } from '@angular/core';

import { PageModule } from '../shared/components/page';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, PageModule],
})
export class HomeModule {}
