import { createReducer, on } from '@ngrx/store';

import * as actions from './settings.actions';
import { INITIAL_STATE } from './settings.state';

export const reducer = createReducer(
  INITIAL_STATE,
  on(actions.toggleDarkMode, (state) => ({
    ...state,
    darkMode: !state.darkMode,
  })),
);
