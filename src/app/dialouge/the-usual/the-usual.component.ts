import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {

  @Output() purchaseDone = new EventEmitter<boolean>();
  @Output() usual = new EventEmitter<string>();
  usualBevMeal: string;
  usualBevMealChoice: boolean = false;


  constructor(private localstorage: LocalStorageService) { }

  ngOnInit(): void {
  }
  UsualBevMeal() {

    this.usualBevMealChoice = true;
    this.usualBevMeal = this.localstorage.getUsualBevMeal();
    this.purchaseDone.emit(this.usualBevMealChoice);
    this.usual.emit(this.usualBevMeal);



  }
}
