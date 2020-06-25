import { Action, combineReducers } from '@ngrx/store';

import { TypedReducer } from '../../shared/utils/ngrx/reducer';
import * as layout from './layout';
import * as router from './router';
import { State } from './store.state';

export const featureReducers: TypedReducer<State> = combineReducers<State>({
  router: router.reducer,
  layout: layout.reducer,
});

export function reducers(state: State | undefined, action: Action): State {
  return featureReducers(state, action);
}
