import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { CoreCoreDataModule } from '@cs/core/core-data';
import { EffectsModule } from '@ngrx/effects';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from '.';
import { FeaturesAuthEffects } from './auth/auth.effects';
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
    CoreCoreDataModule,
    StoreModule.forRoot(reducers, config),
    EffectsModule.forRoot([FeaturesAuthEffects, ItemEffects]),
    StoreDevtoolsModule.instrument({ name: STORE_NAME }),
  ],
})
export class CoreCoreStateModule {}
