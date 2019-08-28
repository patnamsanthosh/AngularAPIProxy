import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor( private http: HttpClient) { }
  apiUrl = 'http://localhost:51143/api/values';

  getHeroes(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  // this.http.get('http://locahost:3000/api/v1/people')
  //   .map(res => res.json());
}
