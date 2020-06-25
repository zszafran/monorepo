import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

import * as routerSelectors from '../../../core/store/router/router.selectors';

@Component({
  selector: 'app-core-header-component',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly title: Observable<string> = this.store
    .select(routerSelectors.selectRouterDataTitle)
    .pipe(startWith('Loading...'));

  constructor(private readonly store: Store<unknown>) {}
}
