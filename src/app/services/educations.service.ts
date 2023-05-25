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
  private apiUrl = 'https://portfoliobackendezd.onrender.com/edu/'


  constructor(private http:HttpClient) { }

  getEducations():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.apiUrl + 'lista')
  }

  updateEducacion(educacion: Educacion):Observable<Educacion>{
    const url = `${this.apiUrl}update/${educacion.id}`
    return this.http.put<Educacion>(url, educacion)
  }

  addEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.apiUrl + 'create', educacion)
  }

  deleteEducacion(educacion:Educacion): Observable<Educacion>{
    const url = `${this.apiUrl}delete/${educacion.id}`
    return this.http.delete<Educacion>(url)
  }

}
