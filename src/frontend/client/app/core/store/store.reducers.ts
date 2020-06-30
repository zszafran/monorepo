import { Action, combineReducers } from '@ngrx/store';

import * as layout from './layout';
import * as router from './router';
import * as settings from './settings';
import { State } from './store.state';

export const featureReducers = combineReducers<State>({
  router: router.reducer,
  layout: layout.reducer,
  settings: settings.reducer,
});

export function reducers(state: State | undefined, action: Action): State {
  return featureReducers(state, action);
}
