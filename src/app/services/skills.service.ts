import { Injectable } from '@angular/core';
import { Skill } from '../model/skill';
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
export class SkillsService {
  private hardApiUrl='http://localhost:8080/skillh/'
  private softApiUrl='http://localhost:8080/skillso/'

  constructor(private http:HttpClient) { }

  getHardSkills():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.hardApiUrl + 'lista')
  }

  getSoftSkills():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.softApiUrl + 'lista')
  }

  updateSoftSkill(skill: Skill):Observable<Skill>{
    const url = `${this.softApiUrl}update/${skill.id}`
    return this.http.put<Skill>(url, skill)
  }

  updateHardSkill(skill: Skill):Observable<Skill>{
    const url = `${this.hardApiUrl}update/${skill.id}`
    return this.http.put<Skill>(url, skill)
  }

  addSoftSkill(skill: Skill):Observable<Skill>{
    return this.http.post<Skill>(this.softApiUrl + 'create', skill)
  }

  addHardSkill(skill: Skill):Observable<Skill>{
    return this.http.post<Skill>(this.hardApiUrl + 'create', skill)
  }
  
  deleteSoftSkill(skill:Skill): Observable<Skill>{
    const url = `${this.softApiUrl}delete/${skill.id}`
    return this.http.delete<Skill>(url)
  }

  deleteHardSkill(skill:Skill): Observable<Skill>{
    const url = `${this.hardApiUrl}delete/${skill.id}`
    return this.http.delete<Skill>(url)
  }
}
