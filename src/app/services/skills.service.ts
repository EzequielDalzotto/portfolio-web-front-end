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
  private softApiUrl = 'http://localhost:5000/soft-skills'
  private hardApiUrl = 'http://localhost:5000/hard-skills'

  constructor(private http:HttpClient) { }

  getSoftSkills():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.softApiUrl)
  }

  getHardSkills():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.hardApiUrl)
  }

  updateSoftSkill(skill: Skill):Observable<Skill>{
    const url = `${this.softApiUrl}/${skill.id}`
    return this.http.put<Skill>(url, skill, httpOptions)
  }

  updateHardSkill(skill: Skill):Observable<Skill>{
    const url = `${this.hardApiUrl}/${skill.id}`
    return this.http.put<Skill>(url, skill, httpOptions)
  }

  addSoftSkill(skill: Skill):Observable<Skill>{
    return this.http.post<Skill>(this.softApiUrl, skill, httpOptions)
  }

  addHardSkill(skill: Skill):Observable<Skill>{
    return this.http.post<Skill>(this.hardApiUrl, skill, httpOptions)
  }
  
  deleteSoftSkill(skill:Skill): Observable<Skill>{
    const url = `${this.softApiUrl}/${skill.id}`
    return this.http.delete<Skill>(url)
  }

  deleteHardSkill(skill:Skill): Observable<Skill>{
    const url = `${this.hardApiUrl}/${skill.id}`
    return this.http.delete<Skill>(url)
  }

}
