import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { SignupFormComponent } from './Register-Course/signup-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginFormComponent } from './Login-Form/login-form.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ContactUsComponent } from './Contact-Us/contact-us.component';
import { AdminPannelComponent } from './Admin-Pannel/admin-pannel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './Signup-Form/register-user.component';
import { ForgotPasswordComponent } from './Forgot-Password/forgot-password.component';
import { AssigntaskComponent } from './assigntask/assigntask.component';

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
    AssigntaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
     HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
