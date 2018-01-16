import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'ng-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

	hotels: Hotel[] = [];
  constructor(private hotelService:HotelService) { }

  ngOnInit() {
  	this.hotels = this.hotelService.getImages();
  }

}
