import { NgModule } from '@angular/core';

import { PageModule } from '../shared/components/page';
import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';

@NgModule({
  declarations: [BrowseComponent],
  imports: [BrowseRoutingModule, PageModule],
})
export class BrowseModule {}
