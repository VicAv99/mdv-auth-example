import { ActionReducerMap } from '@ngrx/store';

import * as fromItems from './items/items.reducer';

export interface AppState {
  [fromItems.ITEM_FEATURE_KEY]: fromItems.ItemState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromItems.ITEM_FEATURE_KEY]: fromItems.itemReducer,
};
