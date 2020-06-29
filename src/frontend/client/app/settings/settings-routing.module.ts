import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

export const routes: Route[] = [
  {
    path: '',
    component: SettingsComponent,
    data: {
      title: 'Settings',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SettingsRoutingModule {}
