import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { WeatherComponent } from './weather/weather.component';
import { GetWeatherService } from './form/get-weather.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CitiesListComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
      HttpModule
  ],
  providers: [GetWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
