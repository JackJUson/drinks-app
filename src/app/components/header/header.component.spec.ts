import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { describe, expect, it, beforeEach, jest } from '@jest/globals';
import { DrinkFilterService } from '../../services/drink-filter.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let drinkFilterService: DrinkFilterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ DrinkFilterService ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    drinkFilterService = TestBed.inject(DrinkFilterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call filterDrinks with the selected filter value"', () => {
    const filterDrinksSpy = jest.spyOn(drinkFilterService, 'filterDrinks');

    const target = { value: 'Beer' };
    const event = new Event('change');
    Object.defineProperty(event, 'target', { value: target });

    component.onFilterChange(event);

    expect(filterDrinksSpy).toHaveBeenCalledWith('Beer');
  });
});
