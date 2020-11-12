import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http: HttpClient) { }

  getHorarios(){
    return this.http.get('http://localhost:8000/api/Horario');
  }

  createHorarios(dt:{}): Observable <any> {
    return this.http.post('http://localhost:8000/api/Horario', JSON.stringify(dt));
  }
}
