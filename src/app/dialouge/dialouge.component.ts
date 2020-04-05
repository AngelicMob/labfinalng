import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-dialouge',
  templateUrl: './dialouge.component.html',
  styleUrls: ['./dialouge.component.css']

})
export class DialougeComponent implements OnInit {

@ViewChild('inputSection') inputBoxSectionPart: ElementRef;

lastNameSection:string = '';
traveler: string;
NewTraveler: boolean;
travelerSignedUp = false;
beverageMeal: string;
usualBevMealChoice = false;
usualBevMeal: string;
// chosen: boolean = false;
inputSectionPart: any;

  constructor(private renderer: Renderer2, private localstorage: LocalStorageService) { }

  ngOnInit(): void {

    this.NewTraveler = this.localstorage.checkIfTravelerExists();
    console.log(this.NewTraveler  + "new traveler exist");

    if (this.NewTraveler === true) {

      this.traveler = this.localstorage.getTravelerName();

    }

}

submit(name: string, lastName: string) {

   if (name === '' || lastName === '') {

    console.log('Provide a Last name please');

    } else {
    this.travelerSignedUp = true;
    this.lastNameSection = lastName;
    this.localstorage.registerTraveler(name, lastName);

    // this.inputSectionPart.nativeElement.remove();
   }
  }


 getBevMeal(beverageMeal: string) {

  this.beverageMeal = beverageMeal;
  // this.chosen = true;
 }

 getUsualOrder(usuals: string) {

  this.usualBevMeal = usuals;
  this.usualBevMealChoice = true;
 }

 deleteTraveler() {

  this.localstorage.signOutTraveler();
}

}
