import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[CORE][WORKER]';

export const init = createAction(`${NAMESPACE} Init`);

export const setEnabled = createAction(`${NAMESPACE} Enabled`);

export const checkForUpdate = createAction(`${NAMESPACE} Check For Update`);

export const updateAvailable = createAction(
  `${NAMESPACE} Update Available`,
  props<{
    current: string;
    available: string;
  }>(),
);

export const activateUpdate = createAction(`${NAMESPACE} Activate Update`);

export const updateActivated = createAction(
  `${NAMESPACE} Update Activated`,
  props<{
    current: string;
  }>(),
);
