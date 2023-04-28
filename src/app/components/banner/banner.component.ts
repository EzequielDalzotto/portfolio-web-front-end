import { Component } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  banner: any = {};

  constructor(private bannerService: BannerService) {  }

  ngOnInit(): void {
      this.bannerService.getBanner().subscribe((banner)=>[
        this.banner = banner
      ])
  }
}
