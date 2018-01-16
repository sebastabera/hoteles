import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';

@Injectable()
export class HotelService {

	hotels : Hotel[] = [
		new Hotel("calima", 10000),
		new Hotel("prueba", 40000),
		new Hotel("Europa", 1000000)
	];

  constructor() { }
  getImages(){
  	return this.hotels;
  }
}
