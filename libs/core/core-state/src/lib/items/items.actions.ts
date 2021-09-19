import { Item } from '@cs/core/api-interfaces';
import { createAction, props } from '@ngrx/store';

// Select Entity

export const selectItem = createAction(
  '[ITEM] Select Item',
  props<{ itemId: string | number }>()
);

// Load all Entities

export const loadItems = createAction('[ITEM] Load Items');

export const loadItemsSuccess = createAction(
  '[ITEM/API] Load Items Success',
  props<{ items: Item[] }>()
);

export const loadItemsFailed = createAction(
  '[ITEM/API] Load Items Failed',
  props<{ error: any }>()
);

// Load Single Entity

export const loadItem = createAction(
  '[ITEM] Load Item',
  props<{ itemId: string }>()
);

export const loadItemSuccess = createAction(
  '[ITEM/API] Load Item Success',
  props<{ item: Item }>()
);

export const loadItemFailed = createAction(
  '[ITEM/API] Load Item Failed',
  props<{ error: any }>()
);

// Load Create Entity

export const createItem = createAction(
  '[ITEM] Create Item',
  props<{ item: Item }>()
);

export const createItemSuccess = createAction(
  '[ITEM/API] Create Item Success',
  props<{ item: Item }>()
);

export const createItemFailed = createAction(
  '[ITEM/API] Create Item Failed',
  props<{ error: any }>()
);

// Load Update Entity

export const updateItem = createAction(
  '[ITEM] Update Item',
  props<{ item: Item }>()
);

export const updateItemSuccess = createAction(
  '[ITEM/API] Update Item Success',
  props<{ item: Item }>()
);

export const updateItemFailed = createAction(
  '[ITEM/API] Create Item Failed',
  props<{ error: any }>()
);

// Load Delete Entity

export const deleteItem = createAction(
  '[ITEM] Delete Item',
  props<{ item: Item }>()
);

export const deleteItemSuccess = createAction(
  '[ITEM/API] Delete Item Success',
  props<{ item: Item }>()
);

export const deleteItemFailed = createAction(
  '[ITEM/API] Create Item Failed',
  props<{ error: any }>()
);
