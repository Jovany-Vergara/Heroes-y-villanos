import { TestBed } from '@angular/core/testing';

import { VillanService } from './villan.service';

describe('VillanService', () => {
  let service: VillanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
