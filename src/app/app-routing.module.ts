import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Login-Form/login-form.component';
import { SignupFormComponent } from './Register-Course/signup-form.component';
import { AdminPannelComponent } from './Admin-Pannel/admin-pannel.component';
import { ContactUsComponent } from './Contact-Us/contact-us.component';
import { RegisterUserComponent } from './Signup-Form/register-user.component';
import { AssigntaskComponent } from './assigntask/assigntask.component';
import { ForgotPasswordComponent } from './Forgot-Password/forgot-password.component';
import { CreateNewPasswordComponent } from './Create-New-Password/create-new-password.component';
import { HomePageComponent } from './Home-Page/home-page.component';
import { Role_Admin } from './ProtectiveRouting/Admin-Guard.service';
import { Role_Student } from './ProtectiveRouting/Student-Guard.service';
import { Role_ResetSuccessful } from './ProtectiveRouting/PassResetSucc.service';


const routes: Routes = [

  {
    path :'login',
    component : LoginFormComponent
  },  
  {
    path :'courseregister',
    component : SignupFormComponent,
    canActivate : [Role_Admin,Role_Student]
  },
  {
    path :'assigntask',
    component : AssigntaskComponent,
    canActivate : [Role_Admin]
  },

  {
    path :'admin',
    component : AdminPannelComponent,
    canActivate : [Role_Admin]
  },
  {
    path :'register',
    component : RegisterUserComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate : [Role_Admin,Role_Student]
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
 
  {
    path: 'forgot',
    component: ForgotPasswordComponent,
  },
  {

    path: 'newpassword',
    component: CreateNewPasswordComponent,
    canActivate : [Role_ResetSuccessful,Role_Admin]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
