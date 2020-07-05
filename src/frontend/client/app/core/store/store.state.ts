import { RouterReducerState } from '@ngrx/router-store';

import * as app from './app/app.state';
import * as layout from './layout/layout.state';
import * as router from './router/router.state';
import * as settings from './settings/settings.state';
import * as users from './users/users.state';
import * as worker from './worker/worker.state';

export interface State {
  app: app.State;
  layout: layout.State;
  router: RouterReducerState<router.State>;
  settings: settings.State;
  users: users.State;
  worker: worker.State;
}

export const INITIAL_STATE: State = {
  app: app.INITIAL_STATE,
  layout: layout.INITIAL_STATE,
  router: router.INITIAL_STATE,
  settings: settings.INITIAL_STATE,
  users: users.INITIAL_STATE,
  worker: worker.INITIAL_STATE,
};
