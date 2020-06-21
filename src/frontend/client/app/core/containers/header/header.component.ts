import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-core-header-component',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
