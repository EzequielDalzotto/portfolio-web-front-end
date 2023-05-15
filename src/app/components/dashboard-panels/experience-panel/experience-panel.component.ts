import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from 'src/app/services/experiences.service';
import { Experience } from 'src/app/model/experience'

@Component({
  selector: 'app-experience-panel',
  templateUrl: './experience-panel.component.html',
  styleUrls: ['./experience-panel.component.css']
})
export class ExperiencePanelComponent implements OnInit {

  experiences: Experience[] = [];
  onAdding: boolean = false;

  constructor(private experiencesService: ExperiencesService) {  }

  ngOnInit(): void {
    this.experiencesService.getExperiences().subscribe((experiences)=>[
      this.experiences = experiences
    ])
  }

  toggleOnAdding(){
    this.onAdding =! this.onAdding;
  }

  saveExperience(experience:Experience){
    this.experiencesService.updateExperience(experience).subscribe();
    alert("Experiencia Modificada")
  }

  addExperience(experience:Experience){
    this.experiencesService.addExperience(experience).subscribe((experience)=>[
      this.experiences.push(experience)
    ])
    this.toggleOnAdding()
  }

  removeExperience(experience:Experience){
    this.experiencesService.deleteExperience(experience).subscribe(()=>[
      this.experiences = this.experiences.filter( (e) => e.id !== experience.id)
    ])
    alert(experience.titulo + ": Removida")
  }

}
