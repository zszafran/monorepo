import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BrowseComponent } from './browse.component';

export const routes: Route[] = [
  {
    path: '',
    component: BrowseComponent,
    data: {
      title: 'Browse',
    },
  },
  {
    path: ':type',
    component: BrowseComponent,
    data: {
      title: 'Browse',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BrowseRoutingModule {}
