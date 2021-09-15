import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreDataModule } from '@cs/core-data';
import { EffectsModule } from '@ngrx/effects';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from '.';
import { AuthEffects } from './auth/auth.effects';
import { ItemEffects } from './items/items.effects';

const STORE_NAME = 'Patient Store';
const config: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true,
  },
};

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, config),
    EffectsModule.forRoot([AuthEffects, ItemEffects]),
    StoreDevtoolsModule.instrument({ name: STORE_NAME }),
  ],
})
export class CoreStateModule {}
