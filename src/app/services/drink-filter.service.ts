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

  constructor() {}

  filterDrinks(value: string): void {
    const filteredDrinks = this.drinks.filter((drink) => drink.type === value);
    this.filteredDrinks.next(filteredDrinks);
  }

  getFilteredDrinks(): Subject<any> {
    return this.filteredDrinks;
  }
}
