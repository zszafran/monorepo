import { ApplicationRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { first, map, switchMapTo } from 'rxjs/operators';

import * as actions from './app.actions';

@Injectable()
export class AppEffects implements OnInitEffects {
  ngrxOnInitEffects(): Action {
    return actions.init();
  }

  platform$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.init),
      map(() => actions.setPlatform({ platform: this.platform })),
    ),
  );

  appRefStable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.init),
      switchMapTo(this.appRef.isStable),
      first((isStable) => !!isStable),
      map(() => actions.setStable()),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly appRef: ApplicationRef,
    @Inject(PLATFORM_ID) private readonly platform: string,
  ) {}
}
