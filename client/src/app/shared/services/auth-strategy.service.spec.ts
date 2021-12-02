import { TestBed } from '@angular/core/testing';

import { AuthStrategyService } from './auth-strategy.service';

describe('AuthStrategyService', () => {
  let service: AuthStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
