import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HotelService } from './services/hotel.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelListComponent } from './hotels/hotel-list/hotel-list.component';
import { HotelComponent } from './hotels/hotel-list/hotel/hotel.component';
import { FinderComponent } from './finder/finder.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HotelsComponent,
    HotelListComponent,
    HotelComponent,
    FinderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
