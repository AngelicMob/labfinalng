import { Injectable, EventEmitter } from '@angular/core';
/*import { SelectBeverageComponent } from './dialouge/select-beverage/select-beverage.component';*/

@Injectable()
export class LocalStorageService {

  traveler = {

    name: '',
    lastName: '',
    beverageMeal: '',


  };

  travelerName: string;
  Object: string;
  purchased: boolean;


checkIfTravelerExists() {



  if (localStorage.getItem('1') !== null) {

    return true;

    } else {

      console.log('sweetrolls');

      return false;

  }
}

registerTraveler(name: string, lastName: string) {

  //  this.travelerName = this.traveler.lastName;
  //  this.traveler.name = name;

  this.traveler.name = name;
  this.traveler.lastName = lastName;

  localStorage.setItem('1', JSON.stringify(this.traveler));
    }


getTravelerName() {

    let returntraveler = localStorage.getItem('1');
    this.traveler = JSON.parse(returntraveler);

    return this.traveler.lastName;

}

orderBevMeal(bevMeal: string) {


  this.traveler.beverageMeal = bevMeal;
  const strings = JSON.stringify(this.traveler);
  this.Object = strings;
  localStorage.setItem('1', strings);


}

getUsualBevMeal() {

  this.purchased = true;

  return this.traveler.beverageMeal;

}

signOutTraveler() {

  localStorage.clear();
  location.reload();

}



}





