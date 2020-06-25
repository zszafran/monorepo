import { Data, Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export interface State {
  url: string;
  params: Params;
  queryParams: Params;
  data: Data;
}

export const INITIAL_STATE: RouterReducerState<State> = {
  state: {
    url: '',
    params: {},
    queryParams: {},
    data: {},
  },
  navigationId: 0,
};
