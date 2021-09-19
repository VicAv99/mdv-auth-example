import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';

import * as FeaturesAuthActions from './auth.actions';
import * as fromAuth from './auth.reducer';
import * as FeaturesAuthSelectors from './auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class FeaturesAuthFacade {
  authLoading$ = this.store.select(FeaturesAuthSelectors.selectAuthLoading);
  isUserAuthenticated$ = this.store.select(
    FeaturesAuthSelectors.selectUserAuthenticated
  );

  constructor(private store: Store<fromAuth.FeaturesAuthState>) {}

  loginRequest(loginPayload: { username: string; password: string }) {
    this.dispatch(FeaturesAuthActions.loginRequested(loginPayload));
  }

  logout() {
    this.dispatch(FeaturesAuthActions.logoutClicked());
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
