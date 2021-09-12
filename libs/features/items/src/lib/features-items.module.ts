import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemViewComponent } from './item-view/item-view.component';
import { ItemsDetailsComponent } from './items-details/items-details.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsComponent } from './items.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ItemsComponent,
    ItemsListComponent,
    ItemsDetailsComponent,
    ItemViewComponent,
  ],
  exports: [
    ItemsComponent,
    ItemsListComponent,
    ItemsDetailsComponent,
    ItemViewComponent,
  ],
})
export class FeaturesItemsModule {}
