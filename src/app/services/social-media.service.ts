import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SocialMedia } from '../model/social-media';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class SocialMediaService {
  private apiUrl = 'http://localhost:5000/social-media'
  constructor(private http:HttpClient) { }

  getSocial():Observable<SocialMedia[]>{
    return this.http.get<SocialMedia[]>(this.apiUrl)
  }

  updateSocial(socialMedia: SocialMedia):Observable<SocialMedia>{
    const url = `${this.apiUrl}/${socialMedia.id}`
    return this.http.put<SocialMedia>(url, socialMedia, httpOptions)
  }
}
