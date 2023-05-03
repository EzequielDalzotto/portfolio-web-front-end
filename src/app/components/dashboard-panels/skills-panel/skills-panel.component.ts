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
  onAddingSK:boolean = false;
  onAddingHK:boolean = false;

  constructor(private skillsService: SkillsService) {  }

  ngOnInit(): void {
    this.skillsService.getSoftSkills().subscribe((softSkills)=>[
      this.softSkills = softSkills
    ])
    
    this.skillsService.getHardSkills().subscribe((hardSkills)=>[
      this.hardSkills = hardSkills
    ])
  }

  toggleOnAddingSK(){
    this.onAddingSK =! this.onAddingSK;
  }
  toggleOnAddingHK(){
    this.onAddingHK =! this.onAddingHK;
  }

  saveSoftChanges(softSkill:Skill){
    this.skillsService.updateSoftSkill(softSkill).subscribe();
    alert("Soft Skill Modificada")
  }
  saveHardChanges(hardSkill:Skill){
    this.skillsService.updateHardSkill(hardSkill).subscribe();
    alert("Hard Skill Modificada")
  }

  addSoftSkill(softSkill:Skill){
    this.skillsService.addSoftSkill(softSkill).subscribe((softSkill)=>[
      this.softSkills.push(softSkill)
    ])
    this.toggleOnAddingSK()
  }
  addHardSkill(hardSkill:Skill){
    this.skillsService.addHardSkill(hardSkill).subscribe((hardSkill)=>[
      this.hardSkills.push(hardSkill)
    ])
    this.toggleOnAddingHK()
  }

  removeSoftSkill(softSkill:Skill){
    this.skillsService.deleteSoftSkill(softSkill).subscribe(()=>[
      this.softSkills = this.softSkills.filter( (s) => s.id !== softSkill.id)
    ])
    alert(softSkill.name + ": Removida")
  }
  removeHardSkill(hardSkill:Skill){
    this.skillsService.deleteHardSkill(hardSkill).subscribe(()=>[
      this.hardSkills= this.hardSkills.filter((s) => s.id !== hardSkill.id)
    ])
    alert(hardSkill.name + ": Removida")
  }
}
