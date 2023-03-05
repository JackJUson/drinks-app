import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Drink } from '../Drink';

import drinksData from '../json/data.json';

@Injectable({
  providedIn: 'root',
})
export class DrinkFilterService {
  drinks: Drink[] = drinksData;

  filteredDrinks = new BehaviorSubject<Drink[]>([]);

  constructor() {
    // initialize with default filter and empty search term
    this.filterDrinks('All'); 
  }

  filterDrinks(value: string): void {
    const filteredDrinks = this.drinks.filter(drink => {
      if (value === 'All') {
        return true;
      } else {
        return drink.type === value;
      }
    });
    this.filteredDrinks.next(filteredDrinks);
  }

  getFilteredDrinks(): Subject<any> {
    return this.filteredDrinks;
  }
}
