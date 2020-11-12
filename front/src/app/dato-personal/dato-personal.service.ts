import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { DatoPersonal } from './dato-personal';

@Injectable({
  providedIn: 'root'
})
export class DatoPersonalService {

  headers;
  apiURL = 'http://localhost:8000/api';
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json'
     })};

  getDatoPersonal(){
    return this.http.get(this.apiURL + '/DatoPersonal');
  }

  // createDatoPersonal(dt:{}): Observable <any> {
  //   return this.http.post('http://localhost:8000/api/DatoPersonal', JSON.stringify(dt));
  // }
  createDatoPersonal(dt: {}): Observable<DatoPersonal> {
    console.log(dt);
    console.log(DatoPersonal);
    return this.http.post<DatoPersonal>(this.apiURL + '/DatoPersonal', JSON.stringify(dt),this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  // createDatoPersonal(datoPersonal){
  //   this.headers = new HttpHeaders().set('Content-Type', 'application/json ; charset=utf-8');
  //   // return this.http.post(this.apiURL + '/DatoPersonal', datoPersonal, { headers, responseType: 'text' as 'json' });
  //   return this.http.post(this.apiURL + '/DatoPersonal', datoPersonal, this.headers);
  // }
}
