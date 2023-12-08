import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupFormComponent } from './registerCourse/signup-form.component';
import { LoginFormComponent } from './loginForm/login-form.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AdminPannelComponent } from './adminPannel/admin-pannel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './registerUser/register-user.component';
import { ForgotPasswordComponent } from './forgotPassword/forgot-password.component';
import { AssigntaskComponent } from './assignTask/assigntask.component';
import { CreateNewPasswordComponent } from './createNewPassword/create-new-password.component';
import { Role_Admin } from './protectiveRouting/adminGuard';
import { Role_Student } from './protectiveRouting/studentGuard.service';
import { Role_ResetSuccessful } from './protectiveRouting/passwordReset';
import { PagenotfoundComponent } from './pageNotFound/pagenotfound.component';
import { AllStudentsComponent } from './allStudents/all-students.component';
import { AuthorizedUsers } from './protectiveRouting/authorization.service';
import { GreetingsComponent } from './sharedComponents/greetings/greetings.component';
import { HomePageComponent } from './homePage/home-page.component';
import { PersonalDetailsComponent } from './sharedComponents/personalDetails/personal-details.component';
import { CourseDetailsComponent } from './courseDetails/course-details.component';
import { ShowAssignedTasksComponent } from './showAssignedTasks/show-assigned-tasks.component';
import { ShowAllTasksComponent } from './showAllTasks/show-all-tasks.component';
import { ShowAssignedCoursesComponent } from './showAssignedCourses/show-assigned-courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component'

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    SignupFormComponent,
    LoginFormComponent,
    AdminPannelComponent,
    RegisterUserComponent,
    ForgotPasswordComponent,
    AssigntaskComponent,
    CreateNewPasswordComponent,
    PagenotfoundComponent,
    AllStudentsComponent,
    GreetingsComponent,
    HomePageComponent,
    PersonalDetailsComponent,
    CourseDetailsComponent,
    ShowAssignedTasksComponent,
    ShowAllTasksComponent,
    ShowAssignedCoursesComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
     HttpClientModule,
     BrowserAnimationsModule,
     MatDialogModule,
    
  ],
  providers: [Role_Admin,Role_Student,Role_ResetSuccessful,AuthorizedUsers],
  bootstrap: [AppComponent]
})
export class AppModule { }
