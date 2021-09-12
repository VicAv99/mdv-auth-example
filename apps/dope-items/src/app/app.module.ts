import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EnvironmentModule } from '@cs/environment';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EnvironmentModule.withEnvironment(environment)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
