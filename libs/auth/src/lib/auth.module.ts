import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent, NotFoundComponent],
  exports: [LoginComponent, NotFoundComponent],
})
export class AuthModule {}
