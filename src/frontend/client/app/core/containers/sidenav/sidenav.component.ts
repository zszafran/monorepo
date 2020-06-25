import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as layoutActions from '../../store/layout/layout.actions';
import * as layoutSelectors from '../../store/layout/layout.selectors';

@Component({
  selector: 'app-core-sidenav-component',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  readonly isExpanded$: Observable<boolean> = this.store.select(
    layoutSelectors.selectLeftSidenavExpanded,
  );

  constructor(private readonly store: Store<unknown>) {}

  toggleExpanded(): void {
    this.store.dispatch(layoutActions.toggleLeftSidenav());
  }
}
