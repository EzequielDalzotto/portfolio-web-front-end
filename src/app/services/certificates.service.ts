import { Injectable } from '@angular/core';
import { Certificate } from '../model/certificate';
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
export class CertificatesService {
  private apiUrl = 'http://localhost:8080/certs/'

  constructor(private http:HttpClient) { }

  getCertificates():Observable<Certificate[]>{
    return this.http.get<Certificate[]>(this.apiUrl + 'lista')
  }

  updateCertificate(certificate: Certificate):Observable<Certificate>{
    const url = `${this.apiUrl}update/${certificate.id}`
    return this.http.put<Certificate>(url, certificate)
  }

  addCertificate(certificate: Certificate):Observable<Certificate>{
    return this.http.post<Certificate>(this.apiUrl + 'create', certificate)
  }

  deleteCertificate(certificate:Certificate): Observable<Certificate>{
    const url = `${this.apiUrl}delete/${certificate.id}`
    return this.http.delete<Certificate>(url)
  }
}
