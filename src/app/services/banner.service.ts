import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private apiUrl = environment.apiUrl + 'banner'

  constructor(private http:HttpClient) { }

  getBanner():Observable<any>{
    return this.http.get(this.apiUrl)
  }

  updateBanner(banner: any):Observable<any>{
    const url = this.apiUrl
    return this.http.put<any>(url, banner, httpOptions)
  }
}
