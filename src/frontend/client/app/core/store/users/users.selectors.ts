import { createSelector } from '@ngrx/store';

import { selectFeature } from '../store.feature';
import { State as CoreState } from '../store.state';
import { adapter, INITIAL_STATE, State } from './users.state';

export const selectUsers = createSelector(
  selectFeature,
  (state: CoreState) => state.users || INITIAL_STATE,
);

export const {
  selectAll: selectAllUsers,
  selectEntities: selectUserEntites,
  selectIds: selectUserIds,
  selectTotal: selectTotalUsers,
} = adapter.getSelectors(selectUsers);

export const selectCurrent = createSelector(
  selectUsers,
  (state: State) => state.current,
);

export const selectCurrentUser = createSelector(
  selectUserEntites,
  selectCurrent,
  (entities, username) => (username && entities[username]) || null,
);
