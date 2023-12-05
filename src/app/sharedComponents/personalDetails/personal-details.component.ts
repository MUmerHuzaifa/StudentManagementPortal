// personal-details.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RoleBasedUserDataService } from '../../services/loggedInUserData.service';
import { UserDataService } from '../../services/userData.service';

interface StoreUserData{
  
}

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  // userId: string='';
  // userEmail: string='';
  // userName: string='';
  // userRole: string='';
  loggedInUserDetails: any;
  taskAssigned: any[] = [];

  constructor(
    private authService: AuthService,
    private userRoleServiceData: RoleBasedUserDataService,
    // private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
  
      this.authService.getUserDataBasedOnRole().subscribe((userData) => {
        if (userData) {
          this.loadStudentDetail(userData);
        }
      },
      error => {
        console.error('Error fetching logged in user data :', error);
      }
    );
 }

  loadStudentDetail(userData) {
    const user = userData.user;
      // this.userRole= 'Dummy'
      // this.userId = user._id;
      // this.userEmail = user.email;
      // this.userName = user.username;
      this.loggedInUserDetails=userData.user;
    console.log(this.loggedInUserDetails)


    console.log('Role:', user.role);
    console.log('User ID is:', user._id);
    console.log('User Email:', user.email);
    console.log('User Name:', user.username);
  }

  showTask(task: any) {
    this.taskAssigned = task.map(item => item.Task);
    console.log(this.taskAssigned);
  }
}