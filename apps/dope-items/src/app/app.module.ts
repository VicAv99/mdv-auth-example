import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreCoreStateModule } from '@cs/core/core-state';
import { CoreEnvironmentModule } from '@cs/core/environment';
import { FeaturesItemsModule } from '@cs/features/items';
import { SharedMaterialModule } from '@cs/shared/material';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreCoreStateModule,
    CoreEnvironmentModule.withEnvironment(environment),
    SharedMaterialModule,
    FeaturesItemsModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
