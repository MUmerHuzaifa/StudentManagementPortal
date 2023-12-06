import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './loginForm/login-form.component';
import { SignupFormComponent } from './registerCourse/signup-form.component';
import { AdminPannelComponent } from './adminPannel/admin-pannel.component';
import { RegisterUserComponent } from './registerUser/register-user.component';
import { AssigntaskComponent } from './assignTask/assigntask.component';
import { ForgotPasswordComponent } from './forgotPassword/forgot-password.component';
import { CreateNewPasswordComponent } from './createNewPassword/create-new-password.component';
import { HomePageComponent } from './homePage/home-page.component';
import { Role_Admin } from './protectiveRouting/adminGuard';
import { Role_Student } from './protectiveRouting/studentGuard.service';
import { Role_ResetSuccessful } from './protectiveRouting/passwordReset';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pageNotFound/pagenotfound.component';
import { AllStudentsComponent } from './allStudents/all-students.component';
import { ShowAllTasksComponent } from './showAllTasks/show-all-tasks.component';
import { LoginGuard } from './protectiveRouting/authLoginGuard';
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
    canActivate: [Role_Admin],
    title : "Signup"
  },
  // {
  //   path: 'login',
  //   component: HomePageComponent,
  //   canActivate: [LoginGuard], // Use the AuthGuard for protecting this route
  // },
  // {
  //   path: '',
  //   redirectTo: '/login', 
  //   pathMatch: 'full', 
  //   title : "Login",
    
  // },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [Role_Student],
    title : "Student|Home"
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
    title : "New Password"
  },
  {
    path: 'navbar',
    component: NavbarComponent,
    // canActivate : [Any_User]
  },
  {
    path:'allstudents',
    component: AllStudentsComponent,
    canActivate:[Role_Admin],
    title : "All-Students"

  },
  {
    path:'allTasks',
    component: ShowAllTasksComponent,
    canActivate:[Role_Admin],
    title : "All-Tasks"

  },
  {
    path : '**',
    component : PagenotfoundComponent,
    title : "404"

  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
