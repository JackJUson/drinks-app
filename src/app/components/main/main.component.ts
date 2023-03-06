import { Component, OnInit } from '@angular/core';
import { DrinkFilterService } from '../../services/drink-filter.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  drinks: any[] = [];

  constructor(private drinkFilterService: DrinkFilterService) { }

  ngOnInit(): void {
    this.drinkFilterService.getFilteredDrinks().subscribe((filtered) => {
      this.drinks = filtered;
    });
  }
}
