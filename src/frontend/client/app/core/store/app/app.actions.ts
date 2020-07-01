import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[CORE][APP]';

export const init = createAction(`${NAMESPACE} Init`);

export const setPlatform = createAction(
  `${NAMESPACE} Set Platform`,
  props<{
    platform: string;
  }>(),
);

export const setStable = createAction(`${NAMESPACE} Set Stable`);
