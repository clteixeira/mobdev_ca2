import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  // Other properties from the response if needed
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage {
  weatherValues: any
  constructor(public httpClient:HttpClient) {
    this.loadData()
  }

  loadData(){
      this.httpClient.get<WeatherResponse>(`${API_URL}/weather?q=${"Dublin"}&appid=${API_KEY}`).subscribe(results =>{
        console.log(results);
        this.weatherValues = results.main
    })
  }

}
