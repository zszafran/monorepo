import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { timer } from 'rxjs';
import { filter, map, switchMap, switchMapTo, tap } from 'rxjs/operators';

import * as appSelectors from '../app/app.selectors';
import * as actions from './worker.actions';

const UPDATE_INTERVAL_MS = 6 * 60 * 60 * 1_000;

@Injectable()
export class WorkerEffects implements OnInitEffects {
  ngrxOnInitEffects(): Action {
    return actions.init();
  }

  isEnabled$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.init),
      switchMap(() =>
        this.store
          .select(appSelectors.selectIsPlatformBrowser)
          .pipe(filter((isPlatformBrowser) => !!isPlatformBrowser)),
      ),
      filter(() => this.swUpdate.isEnabled),
      map(() => actions.setEnabled()),
    ),
  );

  pollForUpdate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.setEnabled),
      switchMapTo(this.store.select(appSelectors.selectIsStable)),
      filter((stable) => !!stable),
      switchMapTo(timer(0, UPDATE_INTERVAL_MS)),
      map(() => actions.checkForUpdate()),
    ),
  );

  checkForUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.checkForUpdate),
        tap(() => {
          this.swUpdate.checkForUpdate();
        }),
      ),
    { dispatch: false },
  );

  watchUpdates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.setEnabled),
      switchMapTo(this.swUpdate.available),
      map(({ current, available }) =>
        actions.updateAvailable({
          current: current.hash,
          available: available.hash,
        }),
      ),
    ),
  );

  updateAvailable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateAvailable),
      map(() => this.snackbar.open('Update available', 'Reload')),
      switchMap((ref) => ref.afterDismissed),
      map(() => actions.activateUpdate()),
    ),
  );

  activateUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.activateUpdate),
        tap(() => {
          this.swUpdate.activateUpdate();
        }),
      ),
    { dispatch: false },
  );

  watchActivations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.setEnabled),
      switchMapTo(this.swUpdate.activated),
      map(({ current }) =>
        actions.updateActivated({
          current: current.hash,
        }),
      ),
    ),
  );

  updateActivated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.updateActivated),
        tap(() => {
          this.document.defaultView.location.reload();
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private readonly store: Store<unknown>,
    private readonly swUpdate: SwUpdate,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly snackbar: MatSnackBar,
  ) {}
}
