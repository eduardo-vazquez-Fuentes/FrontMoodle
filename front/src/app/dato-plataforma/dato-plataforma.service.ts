import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatoPlataformaService {

  constructor(private http: HttpClient) { }

  getDatoPlataforma(){
    return this.http.get('http://localhost:8000/api/DatoPlataforma');
  }

  createDatoPlataforma(dt:{}): Observable <any> {
    return this.http.post('http://localhost:8000/api/DatoPlataforma', JSON.stringify(dt));
  }
}
