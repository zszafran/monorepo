import { createAction } from '@ngrx/store';

import { TypedActionCreator } from '../../../shared/utils/ngrx/actions';

const NAMESPACE = '[CORE][LAYOUT]';

export const init: TypedActionCreator<string> = createAction(
  `${NAMESPACE} Init`,
);

export const expandLeftSidenav: TypedActionCreator<string> = createAction(
  `${NAMESPACE} Expand Left Sidenav`,
);

export const collapseLeftSidenav: TypedActionCreator<string> = createAction(
  `${NAMESPACE} Collapse Left Sidenav`,
);

export const toggleLeftSidenav: TypedActionCreator<string> = createAction(
  `${NAMESPACE} Toggle Left Sidenav`,
);
