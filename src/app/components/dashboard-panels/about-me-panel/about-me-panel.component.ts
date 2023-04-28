import { Component, OnInit } from '@angular/core';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-about-me-panel',
  templateUrl: './about-me-panel.component.html',
  styleUrls: ['./about-me-panel.component.css']
})
export class AboutMePanelComponent implements OnInit{
  about_me: any = {};

  constructor(private aboutMeService: AboutMeService) {  }

  ngOnInit(): void {
      this.aboutMeService.getAboutMe().subscribe((about_me)=>[
        this.about_me = about_me
      ])
  }
}
