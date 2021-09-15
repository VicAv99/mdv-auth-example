import { Injectable } from '@angular/core';
import { Item } from '@cs/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter, map } from 'rxjs/operators';

import * as ItemActions from './items.actions';
import * as fromItems from './items.reducer';
import * as ItemSelectors from './items.selectors';

@Injectable({
  providedIn: 'root',
})
export class ItemFacade {
  allItems$ = this.store.pipe(map((state) => ItemSelectors.getAllItems(state)));
  selectedItems$ = this.store.pipe(select(ItemSelectors.getSelectedItem));
  loaded$ = this.store.pipe(select(ItemSelectors.getItemsLoaded));
  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === ItemActions.createItem({} as any).type ||
        action.type === ItemActions.updateItem({} as any).type ||
        action.type === ItemActions.deleteItem({} as any).type
    )
  );

  selectItem(itemId: string | number) {
    this.dispatch(ItemActions.selectItem({ itemId }));
  }

  loadItems() {
    this.dispatch(ItemActions.loadItems());
  }

  loadItem(itemId: string) {
    this.dispatch(ItemActions.loadItem({ itemId }));
  }

  saveItem(item: Item) {
    item.id ? this.updateItem(item) : this.createItem(item);
  }

  createItem(item: Item) {
    this.dispatch(ItemActions.createItem({ item }));
  }

  updateItem(item: Item) {
    this.dispatch(ItemActions.updateItem({ item }));
  }

  deleteItem(item: Item) {
    this.dispatch(ItemActions.deleteItem({ item }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  constructor(
    private store: Store<fromItems.ItemPartialState>,
    private actions$: ActionsSubject
  ) {}
}
