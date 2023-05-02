import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { SocialMedia } from 'src/app/model/social-media';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-social-form',
  templateUrl: './social-form.component.html',
  styleUrls: ['./social-form.component.css']
})
export class SocialFormComponent {
  @Input() social_network?:SocialMedia;
  @Output() onSaveMedia: EventEmitter<SocialMedia> = new EventEmitter();
  @Output() onDeleteMedia: EventEmitter<SocialMedia> = new EventEmitter();

  socialForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.socialForm = this.formBuilder.group({
      socialUrl:['',[Validators.required]]
    })
  }

  onSave(){
    if (this.social_network) {
      this.social_network.url = this.socialForm.value.socialUrl
      this.onSaveMedia.emit(this.social_network)
      this.socialForm.reset()
    }
  }

  onDelete(socialMedia:SocialMedia){
    this.onDeleteMedia.emit(socialMedia)
  }
}
