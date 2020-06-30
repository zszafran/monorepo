import { createAction } from '@ngrx/store';

const NAMESPACE = '[CORE][SETTINGS]';

export const init = createAction(`${NAMESPACE} Init`);

export const toggleDarkMode = createAction(`${NAMESPACE} Toggle Dark Mode`);
