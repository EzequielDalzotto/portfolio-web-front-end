import { Component, OnInit } from '@angular/core';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  about_me: any = {};

  constructor(private aboutMeService: AboutMeService) {  }

  ngOnInit(): void {
      this.aboutMeService.getAboutMe().subscribe((about_me)=>[
        this.about_me = about_me
      ])
  }
}
