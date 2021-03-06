import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaniaService {

  constructor(private http: HttpClient) { }

  getCampania(){
    return this.http.get('http://localhost:8000/api/Campania ');
  }

  createCampania(dt:{}): Observable <any> {
    return this.http.post('http://localhost:8000/api/Campania ', JSON.stringify(dt));
  }
}
