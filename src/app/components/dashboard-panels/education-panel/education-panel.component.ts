import { Component, OnInit } from '@angular/core';
import { EducationsService } from 'src/app/services/educations.service';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-education-panel',
  templateUrl: './education-panel.component.html',
  styleUrls: ['./education-panel.component.css']
})
export class EducationPanelComponent implements OnInit{
  
  educations: Educacion[] = [];
  onAdding:boolean = false;

  constructor(private educationService: EducationsService) {  }

  ngOnInit(): void {
    this.educationService.getEducations().subscribe((educations)=>[
      this.educations = educations
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
}
