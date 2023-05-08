import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-banner-panel',
  templateUrl: './banner-panel.component.html',
  styleUrls: ['./banner-panel.component.css']
})
export class BannerPanelComponent implements OnInit {
  banner:any = {};
  tempUrl:string = "";
  bannerForm: FormGroup;

  constructor(private bannerService: BannerService, private formBuilder: FormBuilder) {
    this.bannerForm = this.formBuilder.group({
      url:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.bannerService.getBanner().subscribe((banner)=>[
      this.banner = banner
    ])
  }

  onSave(){
    this.banner.url = this.bannerForm.value.url;
    console.log(this.banner);
    
    this.bannerService.updateBanner(this.banner).subscribe();
    alert("Se actualizo el banner")
    this.bannerForm.reset()
  }
}
