import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Hotel } from '../models/hotel';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HotelService {

	hotels : Hotel[] = [
		new Hotel("calima", 10000),
		new Hotel("prueba", 40000),
		new Hotel("Europa", 1000000)
	];

  constructor(private http:Http) { }
  /*getImages() {
  	return this.hotels;
  }*/
  getImages(): Observable<Hotel[]>{
  	let a = this.http.get('http://localhost:3000/api/hotels').map((response: Response) => response.json());
  	console.log(a);
  	return a;
  	//return this.hotels;
  }
}
