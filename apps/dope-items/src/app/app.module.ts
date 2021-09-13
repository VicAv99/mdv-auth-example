import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreStateModule } from '@cs/core-state';
import { EnvironmentModule } from '@cs/environment';
import { FeaturesItemsModule } from '@cs/features/items';
import { MaterialModule } from '@cs/material';

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
    CoreStateModule,
    EnvironmentModule.withEnvironment(environment),
    MaterialModule,
    FeaturesItemsModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
