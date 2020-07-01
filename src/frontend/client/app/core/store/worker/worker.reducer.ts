import { createReducer, on } from '@ngrx/store';

import * as actions from './worker.actions';
import { INITIAL_STATE } from './worker.state';

export const reducer = createReducer(
  INITIAL_STATE,
  on(actions.setEnabled, (state) => ({
    ...state,
    enabled: true,
  })),
  on(actions.updateAvailable, (state) => ({
    ...state,
    updateAvailable: true,
  })),
  on(actions.updateActivated, (state) => ({
    ...state,
    updateActivated: true,
  })),
);
