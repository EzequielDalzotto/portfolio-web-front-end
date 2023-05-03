import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent {
  @Input() skill?:Skill;
  @Output() onSaveSkill: EventEmitter<Skill> = new EventEmitter();
  @Output() onDeleteSkill: EventEmitter<Skill> = new EventEmitter();

  skillForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.skillForm = this.formBuilder.group({
      name:['',[Validators.required]],
      percentage:['',[Validators.required]]
    })
  }

  onSave(){
    if(this.skill){
      this.skill.name = this.skillForm.value.name
      this.skill.percentage = this.skillForm.value.percentage
      this.onSaveSkill.emit(this.skill)
      this.skillForm.reset()
    }
  }

  onDelete(skill: Skill){
    this.onDeleteSkill.emit(skill)
  }
}
