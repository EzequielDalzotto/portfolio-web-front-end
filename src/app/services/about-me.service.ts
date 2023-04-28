import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  private apiUrl = 'http://localhost:5000/about-me'

  constructor(private http:HttpClient) { }

  getAboutMe():Observable<any>{
    return this.http.get(this.apiUrl)
  }
}
