import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  softSkills: Skill[] = [];
  hardSkills: Skill[] = [];

  constructor(private skillsService: SkillsService) {  }

  ngOnInit(): void {
    this.skillsService.getSoftSkills().subscribe((softSkills)=>[
      this.softSkills = softSkills
    ])
    
    this.skillsService.getHardSkills().subscribe((hardSkills)=>[
      this.hardSkills = hardSkills
    ])
  }
}
