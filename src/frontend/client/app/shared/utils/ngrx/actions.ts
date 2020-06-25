import { ActionCreator } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export type TypedActionCreator<T extends string> = ActionCreator<
  T,
  () => TypedAction<T>
>;
