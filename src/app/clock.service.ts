import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface SearchResult {
  datetime: string;
  day_of_year: number;
  week_number: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  api_time: string = ""
  api_day: number = 0
  api_week: number = 0

  constructor(private http: HttpClient) {
  }

  showCurrentTime(): string {
    let today = new Date();
    return today.toLocaleTimeString();
  }

  showCurrentAPITime(): object {

    this.http.get<SearchResult>('http://worldtimeapi.org/api/ip').subscribe(data => {
      this.api_time = data.datetime;
      this.api_day = data.day_of_year;
      this.api_week = data.week_number;
    })

    return {
      "time": this.api_time,
      "day": this.api_day,
      "week": this.api_week,
    }
  }

}
