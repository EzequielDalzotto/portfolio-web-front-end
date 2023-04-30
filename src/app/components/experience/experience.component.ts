import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from 'src/app/services/experiences.service';
import { Experience } from 'src/app/model/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [];

  constructor(private experiencesService: ExperiencesService) {  }

  ngOnInit(): void {
    this.experiencesService.getExperiences().subscribe((experiences)=>[
      this.experiences = experiences
    ])
  }
}
