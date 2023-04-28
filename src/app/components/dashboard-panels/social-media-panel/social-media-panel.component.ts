import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { SocialMedia } from 'src/app/model/social-media';

@Component({
  selector: 'app-social-media-panel',
  templateUrl: './social-media-panel.component.html',
  styleUrls: ['./social-media-panel.component.css']
})
export class SocialMediaPanelComponent implements OnInit {
  
  social_networks: SocialMedia[] = [];

  constructor(private socialMediaService:SocialMediaService) {  }

  ngOnInit(): void {
    this.socialMediaService.getSocial().subscribe((social_networks)=>[
      this.social_networks = social_networks
    ])
  }
}
