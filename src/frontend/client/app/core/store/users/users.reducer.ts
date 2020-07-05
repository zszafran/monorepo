import { createReducer, on } from '@ngrx/store';

import * as actions from './users.actions';
import { adapter, INITIAL_STATE } from './users.state';

export const reducer = createReducer(
  INITIAL_STATE,
  on(actions.user, (state, { user }) => adapter.upsertOne(user, state)),
  on(actions.setCurrentUser, (state, { username }) => ({
    ...state,
    current: username,
  })),
);
