import { Component, OnInit } from '@angular/core';
import { CertificatesService } from 'src/app/services/certificates.service';
import { Certificate } from 'src/app/model/certificate';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {

  certificates: Certificate[] = [];

  constructor(private certificateService:CertificatesService) {  }

  ngOnInit(): void {
    this.certificateService.getCertificates().subscribe((certificates) => [
      this.certificates = certificates
    ])
  }
}
