import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private HttpClient: HttpClient) { }

  // API = 'https://corona.lmao.ninja/v2/countries?sort=cases'

  public getData(query:string):Observable<any[]>{
    return this.HttpClient.get<any[]>(`https://corona.lmao.ninja/v2/countries?sort=${query}`).pipe(
      catchError(this.handleError)
    )
  }
  handleError(error:HttpErrorResponse){
    return throwError(error.headers|| "server error")
  }

}
