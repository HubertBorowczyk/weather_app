import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GetWeatherService } from './get-weather.service';

declare var google: any;

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    providers: [GetWeatherService]
})
export class FormComponent implements OnInit {
    @ViewChild('cityInput') cityInput: ElementRef;
    city: any;
    coords: object;


    constructor(public getWeatherAPI: GetWeatherService) {

    }

    ngOnInit() {
        this.city = new google.maps.places.Autocomplete(this.cityInput.nativeElement);
    }

    getWeather(e) {
        e.preventDefault();
        this.getWeatherAPI.getCityCoords(this.cityInput.nativeElement.value)
            // .subscribe(res => {
            //     this.coords = res;
            //     // this.getWeatherAPI.getWeather(this.coords.lat, this.coords.lng);
            //     console.log(this.coords);
            // });
            .map(res => {
                this.coords = res;
            });
        console.log(this.coords);
        // console.log(this.getWeatherAPI.getCityCoords(this.cityInput.nativeElement.value));
    }


    // ngAfterViewInit() {
    //
    // }
}


