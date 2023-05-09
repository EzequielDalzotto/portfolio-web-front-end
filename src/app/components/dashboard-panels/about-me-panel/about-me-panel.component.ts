import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-about-me-panel',
  templateUrl: './about-me-panel.component.html',
  styleUrls: ['./about-me-panel.component.css']
})
export class AboutMePanelComponent implements OnInit{
  about_me: any = {};
  aboutForm: FormGroup;

  constructor(private aboutMeService: AboutMeService, private formBuilder: FormBuilder) { 
    this.aboutForm = this.formBuilder.group({
      ftPerfil:['',[Validators.required]],
      titulo:['',[Validators.required]],
      ubicacion:['',[Validators.required]],
      descripcion:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.aboutMeService.getAboutMe().subscribe((about_me)=>[
      this.about_me = about_me
    ])
  }

  onSave(){
    if (this.aboutForm.value.ftPerfil) {
      this.about_me.ft_perfil = this.aboutForm.value.ftPerfil;
    }

    if (this.aboutForm.value.titulo) {
      this.about_me.titulo = this.aboutForm.value.titulo;
    }

    if (this.aboutForm.value.ubicacion) {
      this.about_me.ubicacion = this.aboutForm.value.ubicacion;
    }
    if (this.aboutForm.value.descripcion) {
      this.about_me.descripcion = this.aboutForm.value.descripcion;
    }
    // console.log(this.about_me);
    // console.log(this.aboutForm.value.ftPerfil);
    this.aboutMeService.updateAbout(this.about_me).subscribe()
    alert("se actualizo la informacion")
    this.aboutForm.reset()

  }

  get ftPerfil(){
    return this.aboutForm.get('ftPerfil')
  }
  get titulo(){
    return this.aboutForm.get('titulo')
  }
  get ubicacion(){
    return this.aboutForm.get('ubicacion')
  }
  get descripcion(){
    return this.aboutForm.get('descripcion')
  }
}
