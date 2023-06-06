import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { canActivateTeam } from './services/auth-guard';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent, canActivate: [canActivateTeam]},
  {path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
