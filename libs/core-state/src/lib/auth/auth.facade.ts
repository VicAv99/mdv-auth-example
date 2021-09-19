import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as fromAuth from './auth.reducer';
import * as AuthSelectors from './auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  authLoading$ = this.store.select(AuthSelectors.selectAuthLoading);
  isUserAuthenticated$ = this.store.select(
    AuthSelectors.selectUserAuthenticated
  );

  constructor(private store: Store<fromAuth.AuthState>) {}

  loginRequest(loginPayload: { username: string; password: string }) {
    this.dispatch(AuthActions.loginRequested(loginPayload));
  }

  logout() {
    this.dispatch(AuthActions.logoutClicked());
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
