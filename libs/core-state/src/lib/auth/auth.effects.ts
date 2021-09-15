import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@cs/core-data';
import { Actions, createEffect, ofType, rootEffectsInit } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  initAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(rootEffectsInit),
      tap(() => this.authService.setToken(this.authService.getToken())),
      map(() => this.authService.getToken() ?? ''),
      filter((token) => token !== 'null' || !token),
      map((access_token: string) => AuthActions.hydrateToken({ access_token }))
    )
  );

  userRequestToLogIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginRequested),
      switchMap((loginPayload) =>
        this.authService.login(loginPayload).pipe(
          map(({ access_token }) =>
            AuthActions.loginRequestAccepted({ access_token })
          ),
          catchError((error) => of(AuthActions.loginRequestRejected({ error })))
        )
      )
    )
  );

  setAccessTokenToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginRequestAccepted),
        tap(({ access_token }) => this.authService.setToken(access_token)),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  userLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logoutClicked),
        tap(() => this.authService.logout())
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
