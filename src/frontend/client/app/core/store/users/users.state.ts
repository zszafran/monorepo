import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { User } from './users.models';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (entity) => entity.username,
});

export interface State extends EntityState<User> {
  current: string | null;
}

export const INITIAL_STATE: State = adapter.getInitialState({
  current: null,
});
