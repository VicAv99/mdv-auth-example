import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
      name: [
        '',
        [Validators.required, forbiddenItemsValidator(/table|Table|TABLE/i)],
      ],
      description: [''],
    });
  }
}

export function forbiddenItemsValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenItem: { value: control.value } } : null;
  };
}
