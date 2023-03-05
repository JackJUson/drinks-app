import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/Drink';
import { DrinkFilterService } from '../../services/drink-filter.service';
import drinksData from '../../json/data.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  drinks: Drink[] = drinksData;

  constructor(private drinkFilterService: DrinkFilterService) { }

  ngOnInit(): void {
    this.drinkFilterService.getFilteredDrinks().subscribe((filtered) => {
      this.drinks = filtered;
    });
  }
}
