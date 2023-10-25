import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './Login-Form/login-form.component';
import { SignupFormComponent } from './Register-Course/signup-form.component';
import { AdminPannelComponent } from './Admin-Pannel/admin-pannel.component';
import { ContactUsComponent } from './Contact-Us/contact-us.component';
import { RegisterUserComponent } from './Signup-Form/register-user.component';
import { AssigntaskComponent } from './assigntask/assigntask.component';


const routes: Routes = [

  

  {
    path :'login',
    component : LoginFormComponent
  },
  
  
  {
    path :'courseregister',
    component : SignupFormComponent
  },
  {
    path :'assigntask',
    component : AssigntaskComponent
  },

  {
    path :'admin',
    component : AdminPannelComponent
  },
  {
    path :'register',
    component : RegisterUserComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
