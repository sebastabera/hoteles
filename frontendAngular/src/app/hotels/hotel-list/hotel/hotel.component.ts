import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../../models/hotel';

@Component({
  selector: 'ng-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  @Input() hotel: Hotel;
  constructor() { }

  ngOnInit() {
  }

}
