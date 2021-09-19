import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { FeaturesAuthService } from '@cs/core/core-data';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';

import * as FeaturesAuthActions from './auth.actions';

@Injectable()
export class FeaturesAuthEffects {
  initAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rootEffectsInit),
      tap(() => this.authService.setToken(this.authService.getToken())),
      map(() => this.authService.getToken() ?? ''),
      filter((token) => token !== 'null' || !token),
      map((access_token: string) =>
        FeaturesAuthActions.hydrateToken({ access_token })
      )
    )
  );

  userRequestToLogIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeaturesAuthActions.loginRequested),
      switchMap((loginPayload) =>
        this.authService.login(loginPayload).pipe(
          map(({ access_token }) =>
            FeaturesAuthActions.loginRequestAccepted({ access_token })
          ),
          catchError((error) =>
            of(FeaturesAuthActions.loginRequestRejected({ error }))
          )
        )
      )
    )
  );

  setAccessTokenToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FeaturesAuthActions.loginRequestAccepted),
        tap(({ access_token }) => this.authService.setToken(access_token)),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  userLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(FeaturesAuthActions.logoutClicked),
        tap(() => this.authService.logout())
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: FeaturesAuthService,
    private router: Router
  ) {}
}
