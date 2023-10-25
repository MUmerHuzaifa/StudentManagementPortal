import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { SignupFormComponent } from './Register-Course/signup-form.component';
import { LoginFormComponent } from './Login-Form/login-form.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ContactUsComponent } from './Contact-Us/contact-us.component';
import { AdminPannelComponent } from './Admin-Pannel/admin-pannel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './Signup-Form/register-user.component';
import { ForgotPasswordComponent } from './Forgot-Password/forgot-password.component';
import { CreateNewPasswordComponent } from './Create-New-Password/create-new-password.component';
import { Role_Admin } from './ProtectiveRouting/Admin-Guard.service';
import { AuthorizedUsers } from './ProtectiveRouting/Authorization.service';
import { Role_Student } from './ProtectiveRouting/Student-Guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    SignupFormComponent,
    LoginFormComponent,
    ContactUsComponent,
    AdminPannelComponent,
    RegisterUserComponent,
    ForgotPasswordComponent,
    CreateNewPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
     HttpClientModule,
    
  ],
  providers: [Role_Admin,Role_Student,AuthorizedUsers],
  bootstrap: [AppComponent]
})
export class AppModule { }
