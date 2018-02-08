import { Component, OnInit } from '@angular/core';
import { SkiService } from './service/ski.service';
import { SkiresortsDetails } from './model/skiresortsDetails';
import { ActivatedRoute } from '@angular/router';
import { SkiTracks } from './model/skiTracks';
import { SkiWeather } from './model/skiWeather';
import { SkiPass } from './model/skiPass';

@Component({
  selector: 'app-skiresorts',
  templateUrl: './skiresorts.component.html',
  styleUrls: ['./skiresorts.component.css']
})
export class SkiresortsComponent implements OnInit {
	private mountain: SkiresortsDetails;
	private tracks: SkiTracks[];	
	private weather: SkiWeather[];
	private skiPass: SkiPass[];

  constructor(private skiService: SkiService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe( params => {
  		let id = parseInt(params['id']);
				this.skiService.skiresortsDetails(id).subscribe(res => this.mountain = res);
				this.skiService.skiTracks(id).subscribe(res => this.tracks = res);
				this.skiService.skiWeather(id).subscribe(res => this.weather = res);
				this.skiService.skiPass(id).subscribe(res => this.skiPass = res);
			});
  }

  updateTracks(sort){
  	this.skiService.skiTracks(this.mountain._id, sort).subscribe( res => this.tracks = res);
  }

  newReservation(reservation) {
    reservation.mountain_id = this.mountain._id;
    this.skiService.saveReservation(reservation).subscribe(res => {
      window.alert("Reservation successful!");
    }, err => {
      window.alert("Error: " + err);
    });
  }

}
