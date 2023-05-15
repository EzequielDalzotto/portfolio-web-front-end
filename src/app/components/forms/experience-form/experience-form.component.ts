import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from 'src/app/model/experience';


@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent {
  @Input() experience?: Experience;
  @Output() onSaveExperience: EventEmitter<Experience> = new EventEmitter();
  @Output() onDeleteExperience: EventEmitter<Experience> = new EventEmitter();

  experienceForm: FormGroup;
  img: string = "";
  titulo: string = "";
  descripcion: string = "";

  constructor(private formBuilder: FormBuilder) {
    this.experienceForm = this.formBuilder.group({
      img:['',[Validators.required]],
      titulo:['',[Validators.required]],
      descripcion:['',[Validators.required]]
    })
  }

  onSave(){
    if(this.experience){
      this.experience.img = this.experienceForm.value.img
      this.experience.titulo = this.experienceForm.value.titulo
      this.experience.descripcion = this.experienceForm.value.descripcion
      this.onSaveExperience.emit(this.experience)
      console.log(this.experience);
      
      this.experienceForm.reset()
    }else{
      this.img= this.experienceForm.value.img
      this.titulo= this.experienceForm.value.titulo
      this.descripcion= this.experienceForm.value.descripcion
      const{img,titulo,descripcion} = this
      const newExperience = {img,titulo,descripcion}
      this.onSaveExperience.emit(newExperience)
      console.log(newExperience);
      this.experienceForm.reset()
    }
  }

  onDelete(experience: Experience){
    this.onDeleteExperience.emit(experience)
    console.log(experience);
  }
}
