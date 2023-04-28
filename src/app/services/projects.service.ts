import { Injectable } from '@angular/core';
import { Project } from '../model/project';
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
export class ProjectsService {
  private apiUrl = 'http://localhost:5000/projects'


  constructor(private http:HttpClient) { }

  getEducations():Observable<Project[]>{
    return this.http.get<Project[]>(this.apiUrl)
  }
}
