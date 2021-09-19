import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@cs/material';
import { SharedPipesModule } from '@cs/shared/pipes';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule,
  ],
  declarations: [LoginComponent, NotFoundComponent],
  exports: [LoginComponent, NotFoundComponent],
})
export class AuthModule {}
