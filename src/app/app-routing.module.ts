import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Login-Form/login-form.component';
import { SignupFormComponent } from './Register-Course/signup-form.component';
import { HomePageComponent } from './Home-Page/home-page.component';
import { AdminPannelComponent } from './Admin-Pannel/admin-pannel.component';
import { ContactUsComponent } from './Contact-Us/contact-us.component';
import { RegisterUserComponent } from './Signup-Form/register-user.component';

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
  {
    path :'signup',
    component : RegisterUserComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
