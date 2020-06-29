import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'browse',
    loadChildren: () =>
      import('./browse/browse.module').then((m) => {
        return m.BrowseModule;
      }),
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => {
        return m.DashboardModule;
      }),
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () =>
      import('./home/home.module').then((m) => {
        return m.HomeModule;
      }),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => {
        return m.ProfileModule;
      }),
  },
  {
    path: 'settings',
    pathMatch: 'full',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => {
        return m.SettingsModule;
      }),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
