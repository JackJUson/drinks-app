import { Component, OnInit } from '@angular/core';
import { DrinkFilterService } from '../../services/drink-filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private drinkFilterService: DrinkFilterService) {}

  ngOnInit(): void {}

  onFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const filterValue = target.value;
    this.drinkFilterService.filterDrinks(filterValue);
  }
}
