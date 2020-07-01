import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import * as appSelectors from '../../store/app/app.selectors';
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
  readonly title$ = this.store.select(appSelectors.selectTitle);

  readonly isExpanded$ = this.store.select(
    layoutSelectors.selectLeftSidenavExpanded,
  );

  readonly expandedState$ = this.isExpanded$.pipe(
    map((expanded) => (expanded ? 'expanded' : 'collapsed')),
  );

  constructor(private readonly store: Store<unknown>) {}

  toggleExpanded(): void {
    this.store.dispatch(layoutActions.toggleLeftSidenav());
  }
}
