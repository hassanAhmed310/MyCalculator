import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private url = "http://localhost:8090/calculate/";
  constructor(private http: HttpClient) {}
  public calculate(first:number,second:number,operation:string): Observable<string>{
    console.log("Access: "+this.url + first + "/" + second + "/" + operation);
    return this.http.get<string>(this.url + first + "/" + second + "/" + operation);
  }
}