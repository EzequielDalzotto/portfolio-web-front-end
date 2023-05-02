import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-skills-panel',
  templateUrl: './skills-panel.component.html',
  styleUrls: ['./skills-panel.component.css']
})
export class SkillsPanelComponent implements OnInit{
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

  saveSoftChanges(softSkill:Skill){
    this.skillsService.updateSoftSkill(softSkill).subscribe();
    alert("Soft Skill Modificada")
  }
  saveHardChanges(hardSkill:Skill){
    this.skillsService.updateHardSkill(hardSkill).subscribe();
    alert("Hard Skill Modificada")
  }
}
