import { isPlatformBrowser } from '@angular/common';
import { createSelector } from '@ngrx/store';

import { selectFeature } from '../store.feature';
import { State as CoreState } from '../store.state';
import { INITIAL_STATE, State } from './app.state';

export const selectApp = createSelector(
  selectFeature,
  (state: CoreState) => state.app || INITIAL_STATE,
);

export const selectTitle = createSelector(
  selectApp,
  (state: State) => state.title,
);

export const selectPlatform = createSelector(
  selectApp,
  (state: State) => state.platform,
);

export const selectIsPlatformBrowser = createSelector(
  selectPlatform,
  (platform) => isPlatformBrowser(platform),
);

export const selectIsStable = createSelector(
  selectApp,
  (state: State) => state.isStable,
);
