import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, RendererFactory2 } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';

import * as actions from './settings.actions';
import * as selectors from './settings.selectors';

@Injectable()
export class SettingsEffects implements OnInitEffects {
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

  darkTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.toggleDarkMode),
        withLatestFrom(this.store.select(selectors.selectDarkMode)),
        tap(([, darkMode]) => {
          if (darkMode) {
            this.renderer.addClass(this.document.body, 'dark-theme');
          } else {
            this.renderer.removeClass(this.document.body, 'dark-theme');
          }
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<unknown>,
    private readonly rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  private readonly renderer = this.rendererFactory.createRenderer(null, null);
}
