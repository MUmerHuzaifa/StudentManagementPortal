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
import { NavbarComponent } from './Navbar/navbar.component';
// import { Any_User } from './ProtectiveRouting/AnyUserLoggedIn.service';


const routes: Routes = [

  {
    path: 'login',
    component: LoginFormComponent,
    title : "Login"
  },
  {
    path: 'courseregister',
    component: SignupFormComponent,
    canActivate: [Role_Student],
    title : "Register Course"

  },
  {
    path: 'assigntask',
    component: AssigntaskComponent,
    canActivate: [Role_Admin],
    title : "Assign Task"
  },

  {
    path: 'admin',
    component: AdminPannelComponent,
    canActivate: [Role_Admin],
    title : "Admin|Home"
  },
  {
    path: 'register',
    component: RegisterUserComponent,
    title : "Signup"
  },
  {
    path: '',
    redirectTo: '/login', 
    pathMatch: 'full', 
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [Role_Student],
    title : "Student|Home"
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },

  {
    path: 'forgot',
    component: ForgotPasswordComponent,
    title : "Forgot Password"
  },
  {

    path: 'newpassword',
    component: CreateNewPasswordComponent,
    canActivate: [Role_ResetSuccessful],
    title : "Create New Password"
  },
  {
    path: 'navbar',
    component: NavbarComponent,
    // canActivate : [Any_User]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
