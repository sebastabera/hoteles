import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelListComponent } from './hotels/hotel-list/hotel-list.component';
import { HotelComponent } from './hotels/hotel-list/hotel/hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HotelsComponent,
    HotelListComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
