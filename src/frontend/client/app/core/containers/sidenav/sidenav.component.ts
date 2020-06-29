import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as layoutActions from '../../store/layout/layout.actions';
import * as layoutSelectors from '../../store/layout/layout.selectors';
import * as animations from './sidenav.animations';

@Component({
  selector: 'app-core-sidenav-component',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    animations.logoAnimation,
    animations.listItemAnimation,
    animations.listItemIconAnimation,
    animations.listItemAvatarAnimation,
    animations.listItemTextAnimation,
    animations.listItemBadgeAnimation,
  ],
})
export class SidenavComponent {
  readonly isExpanded$: Observable<boolean> = this.store.select(
    layoutSelectors.selectLeftSidenavExpanded,
  );

  readonly expandedState$: Observable<string> = this.isExpanded$.pipe(
    map((expanded) => (expanded ? 'expanded' : 'collapsed')),
  );

  constructor(private readonly store: Store<unknown>) {}

  toggleExpanded(): void {
    this.store.dispatch(layoutActions.toggleLeftSidenav());
  }
}
