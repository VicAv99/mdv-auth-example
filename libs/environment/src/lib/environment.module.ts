import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CsEnvironment } from './environment.model';
import { CS_ENVIRONMENT } from './environment.token';

@NgModule({
  imports: [CommonModule],
})
export class EnvironmentModule {
  static withEnvironment(
    environment: CsEnvironment
  ): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: CS_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}
