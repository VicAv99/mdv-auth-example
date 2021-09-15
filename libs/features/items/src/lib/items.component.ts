import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptyItem, Item } from '@cs/api-interfaces';
import { ItemFacade } from '@cs/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'cs-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  form!: FormGroup;
  allItems$: Observable<Item[]> = this.itemFacade.allItems$;
  selectedItem$: Observable<Item> = this.itemFacade.selectedItems$;

  constructor(
    private itemFacade: ItemFacade,
    private formBuilder: FormBuilder
  ) {
    this.itemFacade.mutations$.subscribe(() => this.resetItem());
  }

  ngOnInit() {
    this.initForm();
    this.itemFacade.loadItems();
    this.resetItem();
  }

  selectItem(item: Item) {
    this.itemFacade.selectItem(item.id);
    this.form.patchValue(item);
  }

  saveItem(item: Item) {
    this.itemFacade.saveItem(item);
  }

  deleteItem(item: Item) {
    this.itemFacade.deleteItem(item);
  }

  resetItem() {
    this.form.reset();
    this.selectItem(emptyItem);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      description: [''],
    });
  }
}
