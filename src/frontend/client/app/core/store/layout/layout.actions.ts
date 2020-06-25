import { createAction } from '@ngrx/store';

const NAMESPACE = '[CORE][LAYOUT]';

export const init = createAction(`${NAMESPACE} Init`);

export const expandLeftSidenav = createAction(
  `${NAMESPACE} Expand Left Sidenav`,
);

export const collapseLeftSidenav = createAction(
  `${NAMESPACE} Collapse Left Sidenav`,
);

export const toggleLeftSidenav = createAction(
  `${NAMESPACE} Toggle Left Sidenav`,
);
