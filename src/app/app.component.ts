import { WeatherData } from './models/weather.module';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  cityName: string = 'Tunis';
  weatherData?: WeatherData;
  latitude: number = 0
  longitude: number = 0

  ngOnInit(): void {
    this.setDefaultWeather()
  }

  title = 'weather-app';

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response: any) => {
          this.weatherData = response
          console.log(response)
        }
      })
  }

  private setDefaultWeather() {

    const success = (position: any) => {
      console.log(position)
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.getWeatherData(this.latitude + "," + this.longitude);
      this.cityName = '';
    }

    const error = () => {
      console.log(error)
      this.getWeatherData(this.cityName);
      this.cityName = '';
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
