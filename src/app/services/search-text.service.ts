import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchTextService {
  private searchSource = new BehaviorSubject<string>('');
  searchText = this.searchSource.asObservable();

  constructor() { }
  
  updateSearch(text: string) {
    this.searchSource.next(text);
  }
}
