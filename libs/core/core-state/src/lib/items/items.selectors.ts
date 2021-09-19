import { emptyItem } from '@cs/core/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ITEM_FEATURE_KEY, itemAdapter, ItemState } from './items.reducer';

export const getItemState = createFeatureSelector<ItemState>(ITEM_FEATURE_KEY);

const { selectAll, selectEntities } = itemAdapter.getSelectors();

export const getItemsLoaded = createSelector(
  getItemState,
  (state: ItemState) => state.loaded
);

export const getItemError = createSelector(
  getItemState,
  (state: ItemState) => state.error
);

export const getAllItems = createSelector(getItemState, (state: ItemState) =>
  selectAll(state)
);

export const getItemEntities = createSelector(
  getItemState,
  (state: ItemState) => selectEntities(state)
);

export const getSelectedItemId = createSelector(
  getItemState,
  (state: ItemState) => state.selectedId
);

export const getSelectedItem = createSelector(
  getItemEntities,
  getSelectedItemId,
  (entities, selectedId) => (selectedId && entities[selectedId]) || emptyItem
);
