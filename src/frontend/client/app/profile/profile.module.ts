import { NgModule } from '@angular/core';

import { PageModule } from '../shared/components/page';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [ProfileRoutingModule, PageModule],
})
export class ProfileModule {}
