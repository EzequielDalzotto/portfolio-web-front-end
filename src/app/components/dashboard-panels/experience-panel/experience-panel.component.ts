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

  constructor(private experiencesService: ExperiencesService) {  }

  ngOnInit(): void {
    this.experiencesService.getExperiences().subscribe((experiences)=>[
      this.experiences = experiences
    ])
  }

}
