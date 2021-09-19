import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Item } from '@cs/api-interfaces';
import { validationMessages } from '@cs/shared/pipes';

@Component({
  selector: 'cs-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss'],
})
export class ItemsDetailsComponent {
  currentItem?: Item;
  originalTitle?: string;
  messages = validationMessages;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() group!: FormGroup;
  @Input() set item(value: Item | null) {
    if (!value) return;
    if (value) this.originalTitle = value.name;
    this.currentItem = { ...value };
  }

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }
}
