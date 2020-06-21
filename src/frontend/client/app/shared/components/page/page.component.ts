import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shared-page-component',
  templateUrl: 'page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {}
