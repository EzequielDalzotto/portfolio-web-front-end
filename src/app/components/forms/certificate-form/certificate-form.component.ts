import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Certificate } from 'src/app/model/certificate';

@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.css']
})
export class CertificateFormComponent {
  @Input() certificate?: Certificate;
  @Output() onSaveCertificate: EventEmitter<Certificate> = new EventEmitter();
  @Output() onDeleteCertificate: EventEmitter<Certificate> = new EventEmitter();

  certificateForm: FormGroup;
  nombre: string = "";
  img: string = "";


  constructor(private formBuilder: FormBuilder) {
    this.certificateForm = this.formBuilder.group({
      nombre:['',[Validators.required]],
      img:['',[Validators.required]]
    })
  }

  onSave(){
    if(this.certificate){
      this.certificate.nombre = this.certificateForm.value.nombre
      this.certificate.img = this.certificateForm.value.img
      this.onSaveCertificate.emit(this.certificate)
      console.log(this.certificate);
      
      this.certificateForm.reset()
    }else{
      this.nombre= this.certificateForm.value.nombre
      this.img= this.certificateForm.value.img
      const{nombre,img} = this
      const newCertificate = {nombre,img}
      this.onSaveCertificate.emit(newCertificate)
      console.log(newCertificate);
      this.certificateForm.reset()
    }
  }

  onDelete(certificate: Certificate){
    this.onDeleteCertificate.emit(certificate)
    console.log(certificate);
  }
}
