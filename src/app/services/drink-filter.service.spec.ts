import { TestBed } from '@angular/core/testing';

import { DrinkFilterService } from './drink-filter.service';
import { describe, expect, it, beforeEach } from '@jest/globals';

describe('DrinkFilterService', () => {
  let service: DrinkFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('filterDrinks tests', () => {});
});
