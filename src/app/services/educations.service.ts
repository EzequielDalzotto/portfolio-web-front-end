import { Injectable } from '@angular/core';
import { Educacion } from '../model/educacion';
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
export class EducationsService {
  private apiUrl = 'http://localhost:5000/educaciones'


  constructor(private http:HttpClient) { }

  getEducations():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.apiUrl)
  }

  updateEducacion(educacion: Educacion):Observable<Educacion>{
    const url = `${this.apiUrl}/${educacion.id}`
    return this.http.put<Educacion>(url, educacion, httpOptions)
  }

  addEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.apiUrl, educacion, httpOptions)
  }
}
