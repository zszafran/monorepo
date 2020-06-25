import { Data } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';

import { selectFeature } from '../store.feature';
import { State as CoreState } from '../store.state';
import { INITIAL_STATE, State } from './router.state';

export const selectRouter = createSelector(
  selectFeature,
  (state: CoreState) => state.router || INITIAL_STATE,
);

export const selectRouterState = createSelector(
  selectRouter,
  (state: RouterReducerState<State>) => state.state,
);

export const selectRouterUrl = createSelector(
  selectRouterState,
  (state: State) => state.url,
);

export const selectRouterParams = createSelector(
  selectRouterState,
  (state: State) => state.params,
);

export const selectRouterQueryParams = createSelector(
  selectRouterState,
  (state: State) => state.queryParams,
);

export const selectRouterData = createSelector(
  selectRouterState,
  (state: State) => state.data,
);

export const selectRouterDataTitle = createSelector(
  selectRouterData,
  (state: Data) => state.title || null,
);
