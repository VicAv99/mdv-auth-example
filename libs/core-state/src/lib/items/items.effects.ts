import { Injectable } from '@angular/core';
import { Item } from '@cs/api-interfaces';
import { ItemsService } from '@cs/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as ItemActions from './items.actions';

@Injectable()
export class ItemEffects {
  loadItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadItem),
      fetch({
        run: (action) =>
          this.itemsService
            .findOne(action.itemId)
            .pipe(map((item: Item) => ItemActions.loadItemSuccess({ item }))),
        onError: (action, error) => ItemActions.loadItemFailed({ error }),
      })
    )
  );
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadItems),
      fetch({
        run: () =>
          this.itemsService
            .all()
            .pipe(
              map((items: Item[]) => ItemActions.loadItemsSuccess({ items }))
            ),
        onError: (action, error) => ItemActions.loadItemsFailed({ error }),
      })
    )
  );
  createItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.createItem),
      pessimisticUpdate({
        run: (action) =>
          this.itemsService
            .create(action.item)
            .pipe(map((item: Item) => ItemActions.createItemSuccess({ item }))),
        onError: (action, error) => ItemActions.createItemFailed({ error }),
      })
    )
  );

  updateItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.updateItem),
      pessimisticUpdate({
        run: (action) =>
          this.itemsService
            .update(action.item)
            .pipe(map((item: Item) => ItemActions.updateItemSuccess({ item }))),
        onError: (action, error) => ItemActions.updateItemFailed({ error }),
      })
    )
  );

  deleteItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.deleteItem),
      pessimisticUpdate({
        run: (action) =>
          this.itemsService
            .delete(action.item)
            .pipe(
              map(() => ItemActions.deleteItemSuccess({ item: action.item }))
            ),
        onError: (action, error) => ItemActions.deleteItemFailed({ error }),
      })
    )
  );

  constructor(private actions$: Actions, private itemsService: ItemsService) {}
}
