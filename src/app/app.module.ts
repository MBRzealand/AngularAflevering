import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingTypesComponent } from './binding-types/binding-types.component';
import {RouterModule} from "@angular/router";
import { ServiceComponentComponent } from './service-component/service-component.component';
import {ClockService} from "./clock.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BindingTypesComponent,
    ServiceComponentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: BindingTypesComponent },
      { path: 'service-component', component: ServiceComponentComponent }
    ]),
    HttpClientModule
  ],
  providers: [ClockService],
  bootstrap: [AppComponent]
})

export class AppModule { }

