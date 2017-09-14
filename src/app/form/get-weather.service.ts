import { Http, Response, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class GetWeatherService {

    constructor(private http: Http) {}

    getCityCoords (city: string): Observable<object> {
        const params = new URLSearchParams();
        params.set('address', city);
        params.set('key', 'AIzaSyAqk2oTt1qsbv2tHleP6TbBdClZRqGFbdM');

        return this.http.get('http://maps.googleapis.com/maps/api/geocode/json', {search: params})
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data.results[0].geometry.location;
                }
            );
    }

    getWeather (lattitude, longtitude) {
        const params = new URLSearchParams();
        params.set('lat', lattitude);
        params.set('lon', longtitude);
        params.set('lang', 'pl');
        params.set('APPID', 'd564ee19e3dd7082924c739a82a04b46');
        params.set('units', 'metric');
        return this.http.get('http://api.openweathermap.org/data/2.5/weather', { search: params } )
            .map(
                (response: Response) => {
                    const data = response.json();
                    // return data;
                    // console.log(data);
                }
            );
    }
}

