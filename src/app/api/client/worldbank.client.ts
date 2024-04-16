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
      console.log(data);
      subject.next({
        Capital: data[1][0].capitalCity,
        Region: data[1][0].region,
        Income: data[1][0].incomeLevel,
        Longitude: data[1][0].longitude,
        Latitude: data[1][0].latitude
      })
     })

    return subject.asObservable();
  }
}
