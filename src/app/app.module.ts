import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialougeComponent } from './dialouge/dialouge.component';
import { SelectBeverageComponent } from './dialouge/select-beverage/select-beverage.component';
import { TheUsualComponent } from './dialouge/the-usual/the-usual.component';

@NgModule({
  declarations: [
    AppComponent,
    DialougeComponent,
    SelectBeverageComponent,
    TheUsualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
