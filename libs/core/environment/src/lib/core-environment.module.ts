import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CsEnvironment } from './environment.model';
import { CS_ENVIRONMENT } from './environment.token';

@NgModule({
  imports: [CommonModule],
})
export class CoreEnvironmentModule {
  static withEnvironment(
    environment: CsEnvironment
  ): ModuleWithProviders<CoreEnvironmentModule> {
    return {
      ngModule: CoreEnvironmentModule,
      providers: [
        {
          provide: CS_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}
