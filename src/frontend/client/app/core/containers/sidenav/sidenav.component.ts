import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-core-sidenav-component',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {}
