import { Component, OnInit, Input } from '@angular/core';
import { SkiresortsDetails } from '../model/skiresortsDetails';

@Component({
  selector: 'sk-skiresorts-panel',
  templateUrl: './skiresorts-panel.component.html',
  styleUrls: ['./skiresorts-panel.component.css']
})
export class SkiresortsPanelComponent implements OnInit {
	@Input() private mountain: SkiresortsDetails;

  constructor() { }

  ngOnInit() {
  }

}
