
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthorizedUsers {
  // I think by default it should be null
  loggedIn: boolean = true;
  studentIn: boolean = true;
  newPassword: boolean = true;
  isAdmin: boolean = true; // Add a property for the admin role
 
 
  // constructor(private authService: AuthService) {
  //   // Check the user's role based on the AuthService
  //   const userId = this.authService.getLoggedInUserId();
  //   authService.getUserRole().subscribe(role => {
  //     if (role === 'admin') {
  //       this.isAdmin = true;
  //       console.log('admin has logged in');
  //     }
  //     else if(role === 'student') {
  //       this.studentIn = true;
  //       console.log('student has logged in');
  //     }
  //     else{
  //       this.isAdmin=false;
  //       this.studentIn=false;
  //     }
  //   });
  // }
 
  adminLogin() {
    this.loggedIn = true;
    this.isAdmin = true; // Set the admin role when logging in as admin
  }
 
  adminLogout() {
    this.loggedIn = false;
    this.isAdmin = false;
  }
 
  IsAdminAuthenticated() {
    return this.loggedIn && this.isAdmin; // Return true if both user is logged in and has the admin role
  }
 
  studentLogin() {
    this.studentIn = true;
  }
 
  studentLogout() {
    this.studentIn = false;
  }
 
  IsStudentAuthenticated() {
    return this.studentIn;
  }
 
  IsPasswordResetSuccessfully() {
    return this.newPassword;
  }
 
  // Logic for multiple roles
  // constructor(private authService: AuthService) {
  //   // Check the user's roles based on the AuthService
  //   const userId = this.authService.getLoggedInUserId();
  //   authService.getUserRoles(userId).subscribe(roles => {
  //     this.isAdmin = roles.includes('admin');
  //     this.isStudent = roles.includes('student');
  //   });
  // }
 
  // login(roles: string[]) {
  //   this.loggedIn = true;
  //   this.isAdmin = roles.includes('admin');
  //   this.isStudent = roles.includes('student');
  // }
 
  // logout() {
  //   this.loggedIn = false;
  //   this.isAdmin = false;
  //   this.isStudent = false;
  // }
 
  // isAuthenticated() {
  //   return this.loggedIn;
  // }
 
  // isAdminAuthenticated() {
  //   return this.isAdmin;
  // }
 
  // isStudentAuthenticated() {
  //   return this.isStudent;
  // }
}
 