import { NgModule } from '@angular/core';

import { PageModule } from '../shared/components/page';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [DashboardRoutingModule, PageModule],
})
export class DashboardModule {}
