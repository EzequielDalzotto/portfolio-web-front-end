import { Component } from '@angular/core';
import { AboutMeService } from 'src/app/services/about-me.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  about_me: any = {};

  constructor(private aboutMeService: AboutMeService) {  }

  ngOnInit(): void {
    this.aboutMeService.getAboutme().subscribe((about_me)=>[
      this.about_me = about_me[0]
    ])
  }
}
