import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {

  beverageMeal: string;
  bevMealSelected = false;
  @Output() mealbev = new EventEmitter<string>();
  constructor(public localstorage: LocalStorageService) {}

ngOnInit(): void {
  }


  Order(order: string) {
    this.localstorage.orderBevMeal(order);
    this.bevMealSelected = true;
    this.beverageMeal = order;
    this.mealbev.emit(order);

  }

}
