import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent {
  @Input() education?: Educacion;
  @Output() onSaveEducation: EventEmitter<Educacion> = new EventEmitter();
  @Output() onDeleteEducation: EventEmitter<Educacion> = new EventEmitter();

  educationForm: FormGroup;
  titulo: string = "";
  periodoe: string = "";
  nombre: string = "";
  detalle: string = "";

  constructor(private formBuilder: FormBuilder) {
    this.educationForm = this.formBuilder.group({
      tipo:['',[Validators.required]],
      periodo:['',[Validators.required]],
      nombre:['',[Validators.required]],
      detalle:['',Validators.required]
    })
  }

  onSave(){
    if(this.education){
      this.education.titulo = this.educationForm.value.tipo
      this.education.periodoe = this.educationForm.value.periodo
      this.education.nombre = this.educationForm.value.nombre
      this.education.detalle = this.educationForm.value.detalle
      this.onSaveEducation.emit(this.education)
      console.log(this.education);
      
      this.educationForm.reset()
    }else{
      this.titulo= this.educationForm.value.tipo
      this.periodoe= this.educationForm.value.periodo
      this.nombre= this.educationForm.value.nombre
      this.detalle= this.educationForm.value.detalle
      const{titulo,periodoe,nombre,detalle} = this
      const neweducation = {titulo,periodoe,nombre,detalle}
      this.onSaveEducation.emit(neweducation)
      console.log(neweducation);
      this.educationForm.reset()
    }
  }

  onDelete(education: Educacion){
    this.onDeleteEducation.emit(education)
    console.log(education);
  }

}
