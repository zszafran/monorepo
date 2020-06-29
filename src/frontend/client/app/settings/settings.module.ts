import { NgModule } from '@angular/core';

import { PageModule } from '../shared/components/page';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [SettingsRoutingModule, PageModule],
})
export class SettingsModule {}
