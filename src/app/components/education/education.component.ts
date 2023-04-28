import { Component, OnInit } from '@angular/core';
import { EducationsService } from 'src/app/services/educations.service';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  educations: Educacion[] = [];

  constructor(private educationService: EducationsService) {  }

  ngOnInit(): void {
    this.educationService.getEducations().subscribe((educations)=>[
      this.educations = educations
    ])
  }
}
