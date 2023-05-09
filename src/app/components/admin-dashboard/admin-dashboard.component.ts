import { Component, OnInit } from '@angular/core';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  about_me: any = {};

  constructor(private aboutMeService: AboutMeService) {  }

  ngOnInit(): void {
      this.aboutMeService.getAboutMe().subscribe((about_me)=>[
        this.about_me = about_me
      ])
  }
}
