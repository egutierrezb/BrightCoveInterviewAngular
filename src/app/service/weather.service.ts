import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {

  }
  //Public method responsible for fetching
  //data from metaweather.com/api/location/2367105
  //(Boston, USA). Further work will lead with any city on the US. 
  public findAll(): Observable<any> {
    return this.http.get('http://api.weatherapi.com/v1/current.json?key=fb3822170fa74976a1e32918230704&q=Boston&aqi=no');
  }
}
