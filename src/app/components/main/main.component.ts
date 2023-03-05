import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/Drink';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  drinks: Drink[] = drinksData;

  constructor() { }

  ngOnInit(): void {
  }

}
