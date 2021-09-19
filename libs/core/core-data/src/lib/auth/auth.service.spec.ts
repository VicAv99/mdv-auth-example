import { TestBed } from '@angular/core/testing';

import { FeaturesAuthService } from './auth.service';

describe('FeaturesAuthService', () => {
  let service: FeaturesAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
