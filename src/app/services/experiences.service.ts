import { Injectable } from '@angular/core';
import { Experience } from '../model/experience';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':'application/json'
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  private apiUrl = environment.apiUrl + 'exps/'

  constructor(private http:HttpClient) { }

  getExperiences():Observable<Experience[]>{
    return this.http.get<Experience[]>(this.apiUrl + 'lista')
  }

  updateExperience(experience: Experience):Observable<Experience>{
    const url = `${this.apiUrl}update/${experience.id}`
    return this.http.put<Experience>(url, experience)
  }

  addExperience(experience: Experience):Observable<Experience>{
    return this.http.post<Experience>(this.apiUrl + 'create', experience)
  }

  deleteExperience(experience:Experience): Observable<Experience>{
    const url = `${this.apiUrl}delete/${experience.id}`
    return this.http.delete<Experience>(url)
  }
}
