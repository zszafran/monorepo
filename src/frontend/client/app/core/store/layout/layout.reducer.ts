import { createReducer, on } from '@ngrx/store';

import { TypedReducer } from '../../../shared/utils/ngrx/reducer';
import * as actions from './layout.actions';
import { INITIAL_STATE, State } from './layout.state';

export const reducer: TypedReducer<State> = createReducer(
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
