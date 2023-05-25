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
  private apiUrl = 'https://portfoliobackendezd.onrender.com/red/'
  constructor(private http:HttpClient) { }

  getSocial():Observable<SocialMedia[]>{
    return this.http.get<SocialMedia[]>(this.apiUrl + 'lista')
  }

  updateSocial(socialMedia: SocialMedia):Observable<SocialMedia>{
    const url = `${this.apiUrl}update/${socialMedia.id}`
    return this.http.put<SocialMedia>(url, socialMedia, httpOptions)
  }
}
