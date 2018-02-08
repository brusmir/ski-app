import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SkiPass } from '../model/skiPass';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'sk-ski-pass',
  templateUrl: './ski-pass.component.html',
  styleUrls: ['./ski-pass.component.css']
})
export class SkiPassComponent implements OnInit {
	@Input() private skiPass: SkiPass[];
	@Output() private newReservation = new EventEmitter();
	reservation: Reservation = new Reservation();

  constructor() { }

  ngOnInit() {
  }

  calculatePrice() {
    if(this.reservation.from && this.reservation.to) {
      let diffDays = this.reservation.calculateDateDifference();
      if(diffDays < 1 || diffDays > 7) {
        console.log("Out of scope");
        this.reservation.price = null;
      }

      for(let i = 0; i < this.skiPass.length; i++) {
        if(this.skiPass[i].duration == diffDays) {
          this.reservation.price = this.skiPass[i].price;
          break;
        }
      }
    }
  }

  saveReservation() {
    this.newReservation.emit(this.reservation);
    this.reservation = new Reservation();
  }

}
