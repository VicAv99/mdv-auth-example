import { createAction, props } from '@ngrx/store';

export const loginRequested = createAction(
  '[AUTH/LoginButton] Login Requested',
  props<{ username: string; password: string }>()
);

export const loginRequestAccepted = createAction(
  '[AUTH/API] Login Request Accepted',
  props<{ access_token: string }>()
);

export const loginRequestRejected = createAction(
  '[AUTH/API] Login Request Rejected',
  props<{ error: any }>()
);

export const logoutClicked = createAction('[AUTH/LogoutButton] Logout Clicked');

export const hydrateToken = createAction(
  '[AUTH/LocalStorage] Hydrate Token',
  props<{ access_token: string }>()
);
