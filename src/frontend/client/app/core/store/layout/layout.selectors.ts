import { createSelector } from '@ngrx/store';

import { selectFeature } from '../store.feature';
import { State as CoreState } from '../store.state';
import { INITIAL_STATE, State } from './layout.state';

export const selectLayout = createSelector(
  selectFeature,
  (state: CoreState) => state.layout || INITIAL_STATE,
);

export const selectLeftSidenavExpanded = createSelector(
  selectLayout,
  (state: State) => state.leftSidenavExpanded,
);
