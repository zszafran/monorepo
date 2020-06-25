import { createReducer, on } from '@ngrx/store';

import * as actions from './layout.actions';
import { INITIAL_STATE } from './layout.state';

export const reducer = createReducer(
  INITIAL_STATE,
  on(actions.expandLeftSidenav, (state) => ({
    ...state,
    leftSidenavExpanded: true,
  })),
  on(actions.collapseLeftSidenav, (state) => ({
    ...state,
    leftSidenavExpanded: false,
  })),
  on(actions.toggleLeftSidenav, (state) => ({
    ...state,
    leftSidenavExpanded: !state.leftSidenavExpanded,
  })),
);
