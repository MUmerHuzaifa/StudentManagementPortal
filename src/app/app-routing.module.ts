import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Login-Form/login-form.component';
import { SignupFormComponent } from './Register-Course/register-course.component';
import { HomePageComponent } from './Home-Page/home-page.component';
import { AdminPannelComponent } from './Admin-Pannel/admin-pannel.component';
import { ContactUsComponent } from './Contact-Us/contact-us.component';
import { RegisterUserComponent } from './Signup-Form/signup-form.component';
import { ForgotPasswordComponent } from './Forgot-Password/forgot-password.component';
import { CourseGuardService } from './course-guard.service';
import { CreateNewPasswordComponent } from './Create-New-Password/create-new-password.component';

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
    component : AdminPannelComponent, canActivate : [CourseGuardService]
  },
  {
    path :'contact',
    component : ContactUsComponent
  },
  {
    path :'signup',
    component : RegisterUserComponent
  },
  {
    path : 'forgot',
    component: ForgotPasswordComponent
  },
  {
    path : 'newpassword',
    component: CreateNewPasswordComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
