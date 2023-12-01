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
  userId: string='';
  userEmail: string='';
  userName: string='';
  userRole: string='';
  taskAssigned: any[] = [];

  constructor(
    private authService: AuthService,
    private userRoleServiceData: RoleBasedUserDataService,
    // private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this.userRole = localStorage.getItem('currentUser');
    // const storedUserData = this.userDataService.getUserData();

    // if (storedUserData) {
    //   this.loadStudentDetail(storedUserData);
    // } 
    // else {
      this.userRoleServiceData.getUserData().subscribe((userData) => {
        if (userData) {
          this.loadStudentDetail(userData);
          // this.userDataService.setUserData(userData);
        }
      });
    // }
  }

  loadStudentDetail(userData: any) {
    const user = userData.user;
      // this.userRole= 'Dummy'
      this.userId = user._id;
      this.userEmail = user.email;
      this.userName = user.username;
    

    console.log('Role:', this.userRole);
    console.log('User ID:', this.userId);
    console.log('User Email:', this.userEmail);
    console.log('User Name:', this.userName);
  }

  showTask(task: any) {
    this.taskAssigned = task.map(item => item.Task);
    console.log(this.taskAssigned);
  }
}