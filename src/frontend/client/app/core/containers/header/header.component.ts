import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { startWith } from 'rxjs/operators';

import * as routerSelectors from '../../../core/store/router/router.selectors';
import * as settingsActions from '../../../core/store/settings/settings.actions';
import * as settingsSelectors from '../../../core/store/settings/settings.selectors';
import * as usersSelectors from '../../../core/store/users/users.selectors';

@Component({
  selector: 'app-core-header-component',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly title$ = this.store
    .select(routerSelectors.selectRouterDataTitle)
    .pipe(startWith('Loading...'));

  readonly darkMode$ = this.store.select(settingsSelectors.selectDarkMode);

  readonly user$ = this.store.select(usersSelectors.selectCurrentUser);

  constructor(private readonly store: Store<unknown>) {}

  onDarkModeToggle(): void {
    this.store.dispatch(settingsActions.toggleDarkMode());
  }
}
