import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoodleService {

  constructor(private http: HttpClient) { }

  getMoodle(){
    return this.http.get('http://localhost:8000/api/Moodle');
  }

  createMoodle(dt:{}): Observable <any> {
    return this.http.post('http://localhost:8000/api/Moodle', JSON.stringify(dt));
  }
}
