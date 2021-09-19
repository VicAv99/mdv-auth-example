import { Item } from '@cs/core/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as ItemActions from './items.actions';

export const ITEM_FEATURE_KEY = 'items';

export interface ItemState extends EntityState<Item> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface ItemPartialState {
  readonly [ITEM_FEATURE_KEY]: ItemState;
}

export const itemAdapter: EntityAdapter<Item> = createEntityAdapter<Item>();

export const initialItemState: ItemState = itemAdapter.getInitialState({
  loaded: false,
});

const onFailed = (state: ItemState, { error }: any): ItemState => ({
  ...state,
  error,
});

const onDispatch = (state: ItemState): ItemState => ({
  ...state,
  loaded: false,
  error: null,
});

const reducer = createReducer(
  initialItemState,
  on(ItemActions.loadItemSuccess, (state, { item }) =>
    itemAdapter.upsertOne(item, { ...state, loaded: true })
  ),
  on(ItemActions.selectItem, (state, { itemId }) => ({
    ...state,
    selectedId: itemId,
  })),
  on(ItemActions.loadItemsSuccess, (state, { items }) =>
    itemAdapter.setAll(items, { ...state, loaded: true })
  ),
  on(ItemActions.deleteItemSuccess, (state, { item }) =>
    itemAdapter.removeOne(String(item.id), { ...state, loaded: true })
  ),
  on(ItemActions.updateItemSuccess, (state, { item }) =>
    itemAdapter.updateOne(
      { id: String(item.id), changes: item },
      { ...state, loaded: true }
    )
  ),
  on(ItemActions.createItemSuccess, (state, { item }) =>
    itemAdapter.addOne(item, { ...state, loaded: true })
  ),
  on(
    ItemActions.loadItemFailed,
    ItemActions.loadItemsFailed,
    ItemActions.createItemFailed,
    ItemActions.updateItemFailed,
    ItemActions.deleteItemFailed,
    onFailed
  ),
  on(
    ItemActions.loadItem,
    ItemActions.loadItems,
    ItemActions.createItem,
    ItemActions.updateItem,
    ItemActions.deleteItem,
    onDispatch
  )
);

export function itemReducer(state: ItemState | undefined, action: Action) {
  return reducer(state, action);
}
