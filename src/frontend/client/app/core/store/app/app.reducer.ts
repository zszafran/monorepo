import { createReducer, on } from '@ngrx/store';

import * as actions from './app.actions';
import { INITIAL_STATE } from './app.state';

export const reducer = createReducer(
  INITIAL_STATE,
  on(actions.setStable, (state) => ({
    ...state,
    isStable: true,
  })),
  on(actions.setPlatform, (state, { platform }) => ({
    ...state,
    platform,
  })),
);
