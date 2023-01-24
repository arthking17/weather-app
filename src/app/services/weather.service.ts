import { WeatherData } from './../models/weather.module';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.WeatherAPIKeyHeaderName, environment.WeatherAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('aqi', 'no')
    })
  }
}
