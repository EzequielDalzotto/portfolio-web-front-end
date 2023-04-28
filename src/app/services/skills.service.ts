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

}
