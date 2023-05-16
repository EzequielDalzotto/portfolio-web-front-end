import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutMe } from '../model/about-me';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  private apiUrl = 'http://localhost:8080/aboutme/'

  constructor(private http:HttpClient) { }

  getAboutme():Observable<AboutMe[]>{
    return this.http.get<AboutMe[]>(this.apiUrl + 'lista')
  }

  updateAbout(about_me: AboutMe):Observable<AboutMe>{
    const url = `${this.apiUrl}update/${about_me.id}`
    return this.http.put<AboutMe>(url, about_me)
  }
}
