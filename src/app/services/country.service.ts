import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient)
  {

  }

  public getCountries():Observable<any>
  {
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }

}
