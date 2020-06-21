import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HeaderComponent],
  imports: [MatToolbarModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
