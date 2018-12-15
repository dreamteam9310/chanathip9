import { TestBed } from '@angular/core/testing';

import { RiceService } from './rice.service';

describe('RiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiceService = TestBed.get(RiceService);
    expect(service).toBeTruthy();
  });
});
