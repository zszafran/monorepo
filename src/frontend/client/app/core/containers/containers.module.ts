import { HeaderModule } from './header';
import { NgModule } from '@angular/core';
import { SidenavModule } from './sidenav';

@NgModule({
  imports: [HeaderModule, SidenavModule],
  exports: [HeaderModule, SidenavModule],
})
export class ContainersModule {}
