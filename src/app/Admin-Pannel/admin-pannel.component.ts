import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserRoleService } from '../user-role.service';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.css']
})
export class AdminPannelComponent implements OnInit {
  status: boolean;
  userId: string;
  userEmail: string;
  userPassword: string;
  username: string;
  userRole: string;
  allStudents: any[] = []; // Assuming this array is populated with user data

  constructor(private authService: AuthService, private userRoleServiceData: UserRoleService) {
    this.authService.getUserData().subscribe(
      allStudents => {
        const students: any = allStudents;
        let userDetailsString = JSON.stringify(students);
        this.allStudentsData(allStudents);
        // console.log(userDetailsString)

      },
      error => {
        console.error('Error fetching all students:', error);
      }
    ); 
  }
  ngOnInit(): void {

    const userDetailsAsObject = localStorage.getItem('userDetails');
    if (userDetailsAsObject) {
      const userDetails = JSON.parse(userDetailsAsObject);
      this.loadAdminDetails(userDetails);
    } else {
      this.userRoleServiceData.getUserData().subscribe((userData) => {
        if (userData) {
          this.loadAdminDetails(userData);
          // Store user details in local storage for future use
          localStorage.setItem('userDetails', JSON.stringify(userData));
        }
      });
    }
    // let allUsersDataT = this.userRoleServiceData.getAllUsersData();
     
  }

  allStudentsData(allStu:any){
    let user = allStu.users;
    // let name = user[6]
    this.allStudents=allStu.users;
    console.log(user)
  }
  onDelete(id:any){

    this.authService.deleteUserById(id).subscribe(response=>{
      this.allStudents = this.allStudents.filter(user => user.id !== id);

      console.log("Deleted")
    },
    error=>{
      console.error('Failed to delete', error);
    })

  }


  loadAdminDetails(userData: any) {

    // Accessing properties
    const status = userData.status;
    const user = userData.user;
    this.userRole = localStorage.getItem('currentUser');

    // Accessing properties inside the 'user' object
    this.userId = user._id;
    this.userEmail = user.email;
    this.userPassword = user.password;
    this.username = user.username;

    console.log('Status:', status);
    console.log('Role:', this.userRole);
    console.log('User ID:', this.userId);
    console.log('User Email:', this.userEmail);
    console.log('User Password:', this.userPassword);
    console.log('User Name:', this.username);

  }

  notification_greetings: boolean = false;

  closeGreetings() {
    this.notification_greetings = true;
  }
  

}
