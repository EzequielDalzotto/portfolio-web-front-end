import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service';
import { SocialMedia } from 'src/app/model/social-media';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  social_networks: SocialMedia[] = [];

  constructor(private socialMediaService:SocialMediaService, private router:Router, private tokenService: TokenService) {  }

  ngOnInit(): void {
    this.socialMediaService.getSocial().subscribe((social_networks)=>[
      this.social_networks = social_networks
    ])
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

}
