import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';

export const routes: Route[] = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class HomeRoutingModule {}
