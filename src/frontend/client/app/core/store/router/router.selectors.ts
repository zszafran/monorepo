import { Data, Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
import { createSelector, MemoizedSelector } from '@ngrx/store';

import { selectFeature } from '../store.feature';
import { State as CoreState } from '../store.state';
import { INITIAL_STATE, State } from './router.state';

export const selectRouter: MemoizedSelector<
  unknown,
  RouterReducerState<State>
> = createSelector(
  selectFeature,
  (state: CoreState) => state.router || INITIAL_STATE,
);

export const selectRouterState: MemoizedSelector<
  unknown,
  State
> = createSelector(
  selectRouter,
  (state: RouterReducerState<State>) => state.state,
);

export const selectRouterUrl: MemoizedSelector<
  unknown,
  string
> = createSelector(selectRouterState, (state: State) => state.url);

export const selectRouterParams: MemoizedSelector<
  unknown,
  Params
> = createSelector(selectRouterState, (state: State) => state.params);

export const selectRouterQueryParams: MemoizedSelector<
  unknown,
  Params
> = createSelector(selectRouterState, (state: State) => state.queryParams);

export const selectRouterData: MemoizedSelector<unknown, Data> = createSelector(
  selectRouterState,
  (state: State) => state.data,
);

export const selectRouterDataTitle: MemoizedSelector<
  unknown,
  string | null
> = createSelector(selectRouterData, (state: Data) => state.title || null);
