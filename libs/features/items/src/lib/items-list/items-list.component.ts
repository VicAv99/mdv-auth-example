import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '@cs/api-interfaces';

@Component({
  selector: 'cs-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent {
  @Input() items?: Item[] | null;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
