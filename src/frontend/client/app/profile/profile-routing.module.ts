import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

export const routes: Route[] = [
  {
    path: '',
    component: ProfileComponent,
    data: {
      title: 'Profile',
    },
  },
  {
    path: ':username',
    component: ProfileComponent,
    data: {
      title: 'Profile',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProfileRoutingModule {}
