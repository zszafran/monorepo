import { Action, combineReducers } from '@ngrx/store';

import * as layout from './layout';
import * as router from './router';
import { State } from './store.state';

export const featureReducers = combineReducers<State>({
  router: router.reducer,
  layout: layout.reducer,
});

export function reducers(state: State | undefined, action: Action): State {
  return featureReducers(state, action);
}
