import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FeaturesAuthGuard } from './auth/auth.guard';
import { TokenInterceptor } from './auth/token.interceptor';
import { UnAuthGuard } from './auth/unauth.guard';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    FeaturesAuthGuard,
    UnAuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
})
export class CoreCoreDataModule {}
