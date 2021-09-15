import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  loading: boolean;
  access_token?: string;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
};

const reducer = createReducer(
  initialState,
  on(AuthActions.loginRequested, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.loginRequestAccepted, (state, { access_token }) => ({
    ...state,
    loading: false,
    isAuthenticated: !!access_token,
    access_token,
  })),
  on(AuthActions.loginRequestRejected, (state) => ({
    ...state,
    loading: false,
  })),
  on(AuthActions.hydrateToken, (state, { access_token }) => ({
    ...state,
    isAuthenticated: !!access_token,
    access_token,
  })),
  on(AuthActions.logoutClicked, () => ({
    ...initialState,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
