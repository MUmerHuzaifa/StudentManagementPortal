import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Login-Form/login-form.component';
import { SignupFormComponent } from './Signup-Form/signup-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPannelComponent } from './Admin-Pannel/admin-pannel.component';
import { ContactUsComponent } from './Contact-Us/contact-us.component';

const routes: Routes = [
  {
    path :'login',
    component : LoginFormComponent
  },
  {
    path :'register',
    component : SignupFormComponent
  },
  {
    path :'home',
    component : HomePageComponent
  },
  {
    path :'admin',
    component : AdminPannelComponent
  },
  {
    path :'contact',
    component : ContactUsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
