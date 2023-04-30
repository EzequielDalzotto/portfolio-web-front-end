import { Injectable } from '@angular/core';
import { Experience } from '../model/experience';
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
export class ExperiencesService {
  private apiUrl = 'http://localhost:5000/experiences'

  constructor(private http:HttpClient) { }

  getExperiences():Observable<Experience[]>{
    return this.http.get<Experience[]>(this.apiUrl)
  }

  updateExperience(experience: Experience):Observable<Experience>{
    const url = `${this.apiUrl}/${experience.id}`
    return this.http.put<Experience>(url, experience, httpOptions)
  }

  addExperience(experience: Experience):Observable<Experience>{
    return this.http.post<Experience>(this.apiUrl, experience, httpOptions)
  }
}
