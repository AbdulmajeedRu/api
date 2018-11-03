import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather;
  constructor(public navCtrl: NavController, private http: HttpClient) {

  }

  showWeather() {
    let params = new HttpParams();
    params = params.append('q', 'Buraydah');
    params = params.append('appid', '565421d3ef35185e99f83c46a33991b9');
    this.http.get('https://api.openweathermap.org/data/2.5/weather', { params: params }).subscribe((data: any) => {
      this.weather = data.weather[0].description;
    })

  }
}
