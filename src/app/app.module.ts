import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';
import { SignupFormComponent } from './Signup-Form/signup-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { LoginFormComponent } from './Login-Form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './Contact-Us/contact-us.component';
import { AdminPannelComponent } from './Admin-Pannel/admin-pannel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SignupFormComponent,
    DatePickerComponent,
    LoginFormComponent,
    HomePageComponent,
    ContactUsComponent,
    AdminPannelComponent,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
