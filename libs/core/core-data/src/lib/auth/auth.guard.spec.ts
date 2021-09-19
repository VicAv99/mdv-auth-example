import { TestBed } from '@angular/core/testing';

import { FeaturesAuthGuard } from './auth.guard';

describe('FeaturesAuthGuard', () => {
  let guard: FeaturesAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FeaturesAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
