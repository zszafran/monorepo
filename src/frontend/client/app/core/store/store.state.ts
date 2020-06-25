import { RouterReducerState } from '@ngrx/router-store';

import * as layout from './layout/layout.state';
import * as router from './router/router.state';

export interface State {
  router: RouterReducerState<router.State>;
  layout: layout.State;
}

export const INITIAL_STATE: State = {
  router: router.INITIAL_STATE,
  layout: layout.INITIAL_STATE,
};
