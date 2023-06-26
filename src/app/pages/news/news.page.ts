import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

const API_URL_NEWS = environment.API_URL_NEWS;
const API_KEY_NEWS = environment.API_KEY_NEWS;

interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  // Other properties from the response if needed
}

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage {
  data: any
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
      this.httpClient.get(`${API_URL_NEWS}/top-headlines?country=us&category=business&apiKey=${API_KEY_NEWS}`).subscribe(data =>{
        console.log(data);
        this.data = data;
    })
  }

}
