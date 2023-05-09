import { Component, OnInit } from '@angular/core';
import { EducationsService } from 'src/app/services/educations.service';
import { Educacion } from 'src/app/model/educacion';
import { Certificate } from 'src/app/model/certificate';
import { CertificatesService } from 'src/app/services/certificates.service';

@Component({
  selector: 'app-education-panel',
  templateUrl: './education-panel.component.html',
  styleUrls: ['./education-panel.component.css']
})
export class EducationPanelComponent implements OnInit{
  
  educations: Educacion[] = [];
  certificates: Certificate[] = [];
  onAdding:boolean = false;
  onAddingCert: boolean = false;

  constructor(private educationService: EducationsService, private certificatesService: CertificatesService) {  }

  ngOnInit(): void {
    this.educationService.getEducations().subscribe((educations)=>[
      this.educations = educations
    ])
    this.certificatesService.getCertificates().subscribe((certificates)=>[
      this.certificates = certificates
    ])
  }

  toggleOnAdding(){
    this.onAdding =! this.onAdding;
  }

  saveEducation(education:Educacion){
    this.educationService.updateEducacion(education).subscribe();
    alert("Educacion Modificada")
  }

  addEducacion(education:Educacion){
    this.educationService.addEducacion(education).subscribe((education)=>[
      this.educations.push(education)
    ])
    this.toggleOnAdding()
  }

  removeEducation(education:Educacion){
    this.educationService.deleteEducacion(education).subscribe(()=>[
      this.educations = this.educations.filter( (s) => s.id !== education.id)
    ])
    alert(education.nombre + ": Removida")
  }

  toggleOnAddingCert(){
    this.onAddingCert =! this.onAddingCert;
  }

  saveCertificate(certificate:Certificate){
    this.certificatesService.updateCertificate(certificate).subscribe();
    alert("Certificado Modificado")
  }

  addCertificate(certificate:Certificate){
    this.certificatesService.addCertificate(certificate).subscribe((certificate)=>[
      this.certificates.push(certificate)
    ])
    this.toggleOnAddingCert()
  }

  removeCertificate(certificate:Certificate){
    this.certificatesService.deleteCertificate(certificate).subscribe(()=>[
      this.certificates = this.certificates.filter( (s) => s.id !== certificate.id)
    ])
    alert(certificate.nombre + ": Removida")
  }
}
