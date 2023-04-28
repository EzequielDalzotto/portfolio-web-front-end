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

  constructor(private educationService: EducationsService) {  }

  ngOnInit(): void {
    this.educationService.getEducations().subscribe((educations)=>[
      this.educations = educations
    ])
  }
}
