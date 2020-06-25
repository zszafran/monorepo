import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { State } from './store.state';

export const FEATURE_KEY = 'core';

export const selectFeature: MemoizedSelector<
  any,
  State
> = createFeatureSelector<State>(FEATURE_KEY);
