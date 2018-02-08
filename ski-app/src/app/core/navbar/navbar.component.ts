import { Component, OnInit } from '@angular/core';
import { SkiService } from '../../skiresorts/service/ski.service';
import { SkiresortsName } from '../../skiresorts/model/skiresortsName';

@Component({
  selector: 'sk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	private mountains: SkiresortsName[];

  constructor(private skiservice: SkiService) { }

  ngOnInit() {
  	this.skiservice.skiresortsName().subscribe(res => this.mountains = res)
  }

}
