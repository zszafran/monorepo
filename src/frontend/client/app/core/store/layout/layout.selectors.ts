import { createSelector, MemoizedSelector } from '@ngrx/store';

import { selectFeature } from '../store.feature';
import { State as CoreState } from '../store.state';
import { INITIAL_STATE, State } from './layout.state';

export const selectLayout: MemoizedSelector<unknown, State> = createSelector(
  selectFeature,
  (state: CoreState) => state.layout || INITIAL_STATE,
);

export const selectLeftSidenavExpanded: MemoizedSelector<
  unknown,
  boolean
> = createSelector(selectLayout, (state: State) => state.leftSidenavExpanded);
