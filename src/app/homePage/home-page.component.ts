import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RoleBasedUserDataService } from '../services/loggedInUserData.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent {
// implements OnInit {
//   status: boolean;
//   userId: string;
//   userEmail: string;
//   userPassword: string;
//   username: string;
//   userRole: string;
//   taskAssigned:any []=[];

//   constructor(private authService: AuthService, private userRoleServiceData: UserRoleService) {}

//   ngOnInit(): void {
//     // Try to get user data from local storage
//     const userDetailsString = localStorage.getItem('userDetails');

//     if (userDetailsString) {
//       const userDetails = JSON.parse(userDetailsString);
//       this.loadStudentDetail(userDetails);
//     } else {
//       // If user details are not in local storage, fetch from the service
//       this.userRoleServiceData.getUserData().subscribe((userData) => {
//         if (userData) {
//           this.loadStudentDetail(userData);

//           // Store user details in local storage for future use
//           localStorage.setItem('userDetails', JSON.stringify(userData));
//         }
//       });
//     }
//   }

//   loadStudentDetail(userData: any) {
//     this.taskAssigned
//     const status = userData.status;
//     const user = userData.user;
//     this.userRole = localStorage.getItem('currentUser');
//     this.authService.getTasksForUser(user._id).subscribe((task)=>{
//      this.showTask(task);
//     })

//     if (this.userRole == 'Admin') {
//       this.userId = '123456789';
//       this.userEmail = 'xyz@student.com';
//       this.userPassword = 'testpass';
//       this.username = 'dummy data';
//       this.userRole = 'Student';
//     } else {
//       this.userId = user._id;
//       this.userEmail = user.email;
//       this.userPassword = user.password;
//       this.username = user.username;

//       console.log('Status:', status);
//       console.log('Role:', this.userRole);
//       console.log('User ID:', this.userId);
//       console.log('User Email:', this.userEmail);
//       console.log('User Password:', this.userPassword);
//       console.log('User Name:', this.username);
//     }
//   }

//   showTask(task:any){
//     const tasks = task.Task
//     this.taskAssigned = task.map(item => item.Task);
//     console.log(this.taskAssigned);
//   }

}
