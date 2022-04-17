import { Component, OnInit } from '@angular/core';
import {ClockService} from "../clock.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {
  today: any;
  apiResponse: object | undefined;
  intervalId: any;
  subscription: Subscription | undefined;

  dateTime: string | undefined;
  dayOfYear: number | undefined;
  weekOfYear: number | undefined;


  constructor(private clock: ClockService) { }

  ngOnInit(): void {
    this.apiResponse = this.clock.showCurrentAPITime();
    this.intervalId = setInterval(() => {
      this.today = this.clock.showCurrentTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  fetchAPI(){
    this.apiResponse = this.clock.showCurrentAPITime();
    this.dateTime = Object(this.apiResponse)["time"];
    this.dayOfYear = Object(this.apiResponse)["day"];
    this.weekOfYear = Object(this.apiResponse)["week"];

  }
}
