import { createSelector } from '@ngrx/store';

import { selectFeature } from '../store.feature';
import { State as CoreState } from '../store.state';
import { INITIAL_STATE, State } from './worker.state';

export const selectWorker = createSelector(
  selectFeature,
  (state: CoreState) => state.worker || INITIAL_STATE,
);

export const selectEnabled = createSelector(
  selectWorker,
  (state: State) => state.enabled,
);
