import { Component, OnInit, Input } from '@angular/core';
import { SkiWeather } from '../model/skiWeather';

@Component({
  selector: 'sk-ski-weather',
  templateUrl: './ski-weather.component.html',
  styleUrls: ['./ski-weather.component.css']
})
export class SkiWeatherComponent implements OnInit {
	@Input() private weather: SkiWeather;

  constructor() { }

  ngOnInit() {
  }

}
