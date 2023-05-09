import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SocialMediaPanelComponent } from './components/dashboard-panels/social-media-panel/social-media-panel.component';
import { BannerPanelComponent } from './components/dashboard-panels/banner-panel/banner-panel.component';
import { AboutMePanelComponent } from './components/dashboard-panels/about-me-panel/about-me-panel.component';
import { EducationPanelComponent } from './components/dashboard-panels/education-panel/education-panel.component';
import { SkillsPanelComponent } from './components/dashboard-panels/skills-panel/skills-panel.component';
import { ProjectsPanelComponent } from './components/dashboard-panels/projects-panel/projects-panel.component';
import { ExperiencePanelComponent } from './components/dashboard-panels/experience-panel/experience-panel.component';
import { SocialFormComponent } from './components/forms/social-form/social-form.component';
import { SkillsFormComponent } from './components/forms/skills-form/skills-form.component';
import { EducationFormComponent } from './components/forms/education-form/education-form.component';
import { ExperienceFormComponent } from './forms/experience-form/experience-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    CertificatesComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    AdminDashboardComponent,
    SocialMediaPanelComponent,
    BannerPanelComponent,
    AboutMePanelComponent,
    EducationPanelComponent,
    SkillsPanelComponent,
    ProjectsPanelComponent,
    ExperiencePanelComponent,
    SocialFormComponent,
    SkillsFormComponent,
    EducationFormComponent,
    ExperienceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
