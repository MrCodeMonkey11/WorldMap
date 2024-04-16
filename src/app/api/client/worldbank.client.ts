import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldBankClient {

  constructor(private http: HttpClient) { }

  getCountryInfo(country: string) {
    let subject = new Subject();

    this.http.get("https://api.worldbank.org/v2/country/" + country + "?format=json").subscribe((data: any) => {
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
