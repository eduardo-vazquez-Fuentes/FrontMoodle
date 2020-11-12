import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private http: HttpClient) { }

  getMentor(){
    return this.http.get('http://localhost:8000/api/Mentor');
  }

  createMentor(dt:{}): Observable <any> {
    return this.http.post('http://localhost:8000/api/Mentor', JSON.stringify(dt));
  }
}
