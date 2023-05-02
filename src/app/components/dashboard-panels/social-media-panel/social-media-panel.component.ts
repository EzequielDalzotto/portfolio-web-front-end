import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { SocialMedia } from 'src/app/model/social-media';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-social-media-panel',
  templateUrl: './social-media-panel.component.html',
  styleUrls: ['./social-media-panel.component.css']
})
export class SocialMediaPanelComponent implements OnInit {
  
  social_networks: SocialMedia[] = [];
  socialForm: FormGroup;

  constructor(private socialMediaService:SocialMediaService, private formBuilder: FormBuilder) {
    this.socialForm = this.formBuilder.group({
      socialUrl:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.socialMediaService.getSocial().subscribe((social_networks)=>[
      this.social_networks = social_networks
    ])
  }

  saveChanges(socialMedia:SocialMedia){
    this.socialMediaService.updateSocial(socialMedia).subscribe();
    alert("Url modificada")
    //solucion temporal
    // window.location.reload()
  }
}
