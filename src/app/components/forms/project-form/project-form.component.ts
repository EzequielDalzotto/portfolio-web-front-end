import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {
  @Input() project?: Project;
  @Output() onSaveProject: EventEmitter<Project> = new EventEmitter();
  @Output() onDeleteProject: EventEmitter<Project> = new EventEmitter();

  projectForm: FormGroup;
  url: string = "";
  portada: string = "";
  titulo: string = "";
  descripcion: string = "";

  constructor(private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      url:['',[Validators.required]],
      portada:['',[Validators.required]],
      titulo:['',[Validators.required]],
      descripcion:['',[Validators.required]]
    })
  }

  onSave(){
    if(this.project){
      this.project.url = this.projectForm.value.url
      this.project.portada = this.projectForm.value.portada
      this.project.titulo = this.projectForm.value.titulo
      this.project.descripcion = this.projectForm.value.descripcion
      this.onSaveProject.emit(this.project)
      console.log(this.project);
      
      this.projectForm.reset()
    }else{
      this.url= this.projectForm.value.url
      this.portada= this.projectForm.value.portada
      this.titulo= this.projectForm.value.titulo
      this.descripcion= this.projectForm.value.descripcion
      const{url,portada,titulo,descripcion} = this
      const newProject = {url,portada,titulo,descripcion}
      this.onSaveProject.emit(newProject)
      console.log(newProject);
      this.projectForm.reset()
    }
  }

  onDelete(project: Project){
    this.onDeleteProject.emit(project)
    console.log(project);
  }
}
