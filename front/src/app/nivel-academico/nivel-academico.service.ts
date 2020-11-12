import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NivelAcademicoService {

  constructor(private http: HttpClient) { }

  getNivelAcademico(){
    return this.http.get('http://localhost:8000/api/NivelAcademico');
  }

  createNivelAcademico(dt:{}): Observable <any> {
    return this.http.post('http://localhost:8000/api/NivelAcademico', JSON.stringify(dt));
  }
}
