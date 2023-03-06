import { TestBed } from '@angular/core/testing';

import { DrinkFilterService } from './drink-filter.service';
import { describe, expect, it, beforeEach } from '@jest/globals';

import drinksData from '../json/data.json';

describe('DrinkFilterService', () => {
  let service: DrinkFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('filterDrinks tests', () => {
    it('should filter drinks by "All" and emit the filtered drinks', () => {
      const expectedFilteredDrinks = drinksData;
      service.filterDrinks('All');
      service.filteredDrinks.subscribe((filteredDrinks) => {
        expect(filteredDrinks).toEqual(expectedFilteredDrinks);
      });
    });

    it('should filter drinks by "Beer" drink type', () => {
      const expectedFilteredDrinks = drinksData.filter(
        (drink) => drink.type === 'Beer'
      );
      service.filterDrinks('Beer');
      service.filteredDrinks.subscribe((filteredDrinks) => {
        expect(filteredDrinks).toEqual(expectedFilteredDrinks);
      });
    });
  });
});
