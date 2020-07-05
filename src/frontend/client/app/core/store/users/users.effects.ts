import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

import * as actions from './users.actions';
import { UsersService } from './users.service';

@Injectable()
export class UsersEffects implements OnInitEffects {
  ngrxOnInitEffects(): Action {
    return actions.init();
  }

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.init),
      mergeMap(() => from([actions.loadCurrentUser()])),
    ),
  );

  getCurrent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadCurrentUser),
      switchMap(() =>
        this.service
          .getCurrent()
          .pipe(
            mergeMap((user) =>
              from([
                actions.user({ user }),
                actions.setCurrentUser({ username: user.username }),
              ]),
            ),
          ),
      ),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly service: UsersService,
  ) {}
}
