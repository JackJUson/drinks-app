import { TestBed } from '@angular/core/testing';

import { DrinkFilterService } from './drink-filter.service';

describe('DrinkFilterService', () => {
  let service: DrinkFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
