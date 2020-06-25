import { NgModule } from '@angular/core';

import { HeaderModule } from './header';
import { SidenavModule } from './sidenav';

@NgModule({
  imports: [HeaderModule, SidenavModule],
  exports: [HeaderModule, SidenavModule],
})
export class ContainersModule {}
