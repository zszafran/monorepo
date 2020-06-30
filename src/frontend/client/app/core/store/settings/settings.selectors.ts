import { createSelector } from '@ngrx/store';

import { selectFeature } from '../store.feature';
import { State as CoreState } from '../store.state';
import { INITIAL_STATE, State } from './settings.state';

export const selectSettings = createSelector(
  selectFeature,
  (state: CoreState) => state.settings || INITIAL_STATE,
);

export const selectDarkMode = createSelector(
  selectSettings,
  (state: State) => state.darkMode,
);
