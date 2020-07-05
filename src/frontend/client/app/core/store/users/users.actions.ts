import { createAction, props } from '@ngrx/store';

import { User } from './users.models';

const NAMESPACE = '[CORE][USERS]';

export const init = createAction(`${NAMESPACE} Init`);

export const user = createAction(`${NAMESPACE} User`, props<{ user: User }>());

export const loadCurrentUser = createAction(`${NAMESPACE} Load Current`);

export const setCurrentUser = createAction(
  `${NAMESPACE} Set Current`,
  props<{ username: string }>(),
);
