import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldBankApiClient {

  constructor(private http: HttpClient) { }

  fetchCountryInfo(country: string) {
    let formattedCountry = country.split('-').join(' ')
    let url = 'http://api.worldbank.org/v2/country/${formattedCountry}?format=json';
    let response = this.http.get(url);

    // Print the response for debugging purposes...not working for some reason...
    console.log(response);

    return response;
  }

  setCountryInfo(country: string) {
    let subject = new Subject();

    this.fetchCountryInfo(country).subscribe((data: any) => {
      subject.next({
        country: data.title,
        Capital: data.capitalCity,
        Region: data.region,
        Income: data.incomeLevel,
        Longitude: data.longitude,
        Latitude: data.latitude
      })
     })

    return subject.asObservable();
  }
}
