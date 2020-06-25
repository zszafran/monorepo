import { Action } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store/src/models';

export type TypedReducer<S> = ActionReducer<S, Action>;
