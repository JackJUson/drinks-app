import { Injectable } from '@angular/core';
import { Drink } from '../Drink';

import drinksData from '../json/data.json';

@Injectable({
  providedIn: 'root'
})
export class DrinkFilterService {
  drinks: Drink[] = drinksData;

  constructor() {}

  filterDrinks(value: string): void {
    
  }
}
