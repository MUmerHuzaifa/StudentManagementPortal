import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedUsers {
  loggedIn: boolean = true;
  studentIn: boolean = true;
  newPassword: boolean = true;
  isAdmin: boolean = true; // Add a property for the admin role

  constructor(private authService: AuthService) {
    const userId = authService.getLoggedInUserId();
    console.log("User id for role is " + userId);
    authService.getUserRole(userId).subscribe(role => {
      if (role === 'admin') {
        this.isAdmin = true;
      }
    });
  }
  


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
}
