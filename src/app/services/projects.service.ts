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

  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(this.apiUrl)
  }

  updateProject(project: Project):Observable<Project>{
    const url = `${this.apiUrl}/${project.id}`
    return this.http.put<Project>(url, project, httpOptions)
  }

  addProject(project: Project):Observable<Project>{
    return this.http.post<Project>(this.apiUrl, project, httpOptions)
  }

  deleteProject(project:Project): Observable<Project>{
    const url = `${this.apiUrl}/${project.id}`
    return this.http.delete<Project>(url)
  }
}
