import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from '@cs/shared/material';
import { SharedPipesModule } from '@cs/shared/pipes';

import { ItemViewComponent } from './item-view/item-view.component';
import { ItemsDetailsComponent } from './items-details/items-details.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsComponent } from './items.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule,
  ],
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
