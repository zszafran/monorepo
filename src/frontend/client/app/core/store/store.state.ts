import { RouterReducerState } from '@ngrx/router-store';

import * as layout from './layout/layout.state';
import * as router from './router/router.state';
import * as settings from './settings/settings.state';

export interface State {
  layout: layout.State;
  router: RouterReducerState<router.State>;
  settings: settings.State;
}

export const INITIAL_STATE: State = {
  layout: layout.INITIAL_STATE,
  router: router.INITIAL_STATE,
  settings: settings.INITIAL_STATE,
};
