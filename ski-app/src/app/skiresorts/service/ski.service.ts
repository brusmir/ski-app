import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { SkiresortsName } from '../model/skiresortsName';
import { SkiresortsDetails } from '../model/skiresortsDetails';
import { SkiTracks } from '../model/skiTracks';
import { SkiWeather } from '../model/skiWeather';
import { SkiPass } from '../model/skiPass';
import { Reservation } from '../model/reservation';

const baseUrl = "http://localhost:3000/api/skiresorts";

@Injectable()
export class SkiService {

  constructor(private http: HttpClient) { }

  skiresortsName(){
  	return this.http.get<Array<SkiresortsName>>(baseUrl).map( response => { 
			let retVal: SkiresortsName[] = [];
			response.forEach(elem => retVal.push(new SkiresortsName(elem)));
				return retVal;
		});
  }

  skiresortsDetails(id):Observable<SkiresortsDetails>{
  	return this.http.get(baseUrl + "/" + id).map( res => new SkiresortsDetails(res))
  }

  skiTracks(id, params? :any){
  	let queryParams = {};
		if(params){
			queryParams = {
				params : new HttpParams()
				.set("sort", params.sort || "")
      }
    }
  	return this.http.get<Array<SkiTracks>>(baseUrl + "/" + id + "/tracks", queryParams).map( response => { 
			let retVal: SkiTracks[] = [];
			response.forEach(elem => retVal.push(new SkiTracks(elem)));
				return retVal;
		});
  }

  skiWeather(id){
  	return this.http.get<Array<SkiWeather>>(baseUrl + "/" + id + "/weather").map( response => { 
			let retVal: SkiWeather[] = [];
			response.forEach(elem => retVal.push(new SkiWeather(elem)));
				return retVal;
		});
  }

  skiPass(id){
  	return this.http.get<Array<SkiPass>>(baseUrl + "/" + id + "/skipass").map( response => { 
			let retVal: SkiPass[] = [];
			response.forEach(elem => retVal.push(new SkiPass(elem)));
				return retVal;
		});
  }

  saveReservation(reservation: Reservation) {
    return this.http.post(baseUrl + "/" + reservation.mountain_id + "/skipass", reservation);
  }

}
