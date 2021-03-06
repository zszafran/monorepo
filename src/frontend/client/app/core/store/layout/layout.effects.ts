import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import * as actions from './layout.actions';

@Injectable()
export class LayoutEffects implements OnInitEffects {
  ngrxOnInitEffects(): Action {
    return actions.init();
  }

  init$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.init),
        tap((action) => {
          console.log(action);
        }),
      ),
    { dispatch: false },
  );

  constructor(private actions$: Actions) {}
}
