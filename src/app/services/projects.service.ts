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
  private apiUrl = 'http://localhost:8080/proyectos/'


  constructor(private http:HttpClient) { }

  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(this.apiUrl + 'lista')
  }

  updateProject(project: Project):Observable<Project>{
    const url = `${this.apiUrl}update/${project.id}`
    return this.http.put<Project>(url, project, httpOptions)
  }

  addProject(project: Project):Observable<Project>{
    return this.http.post<Project>(this.apiUrl + 'create', project, httpOptions)
  }

  deleteProject(project:Project): Observable<Project>{
    const url = `${this.apiUrl}delete/${project.id}`
    return this.http.delete<Project>(url)
  }
}
