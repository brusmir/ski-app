import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SkiTracks } from '../model/skiTracks';

@Component({
  selector: 'sk-ski-tracks',
  templateUrl: './ski-tracks.component.html',
  styleUrls: ['./ski-tracks.component.css']
})
export class SkiTracksComponent implements OnInit {
	@Input() private tracks: SkiTracks[];
	@Output() private sortValue = new EventEmitter();

	private sortBy;

  constructor() { }

  ngOnInit() {
  }

  changeValue(){
  	this.sortValue.emit({sort:this.sortBy});
  }
}
