import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth/auth.reducer';
import * as fromItems from './items/items.reducer';

export interface AppState {
  [fromAuth.AUTH_FEATURE_KEY]: fromAuth.FeaturesAuthState;
  [fromItems.ITEM_FEATURE_KEY]: fromItems.ItemState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.AUTH_FEATURE_KEY]: fromAuth.authReducer,
  [fromItems.ITEM_FEATURE_KEY]: fromItems.itemReducer,
};
