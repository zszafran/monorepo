import { Action, combineReducers } from '@ngrx/store';

import * as app from './app';
import * as layout from './layout';
import * as router from './router';
import * as settings from './settings';
import { State } from './store.state';
import * as worker from './worker';

export const featureReducers = combineReducers<State>({
  app: app.reducer,
  layout: layout.reducer,
  router: router.reducer,
  settings: settings.reducer,
  worker: worker.reducer,
});

export function reducers(state: State | undefined, action: Action): State {
  return featureReducers(state, action);
}
