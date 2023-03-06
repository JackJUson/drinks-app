import { Component, OnInit } from '@angular/core';
import { SearchTextService } from '../../services/search-text.service';
import { DrinkFilterService } from '../../services/drink-filter.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  drinks: any[] = [];
  searchText: string = '';

  constructor(
    public searchTextService: SearchTextService,
    private drinkFilterService: DrinkFilterService
  ) {}

  ngOnInit(): void {
    this.drinkFilterService.getFilteredDrinks().subscribe((filtered) => {
      this.drinks = filtered;
    });

    this.searchTextService.searchText.subscribe((searchText) => {
      this.searchText = searchText;
    });
  }
}
