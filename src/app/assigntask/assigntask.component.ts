import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

interface User {
  userID: number;
  name: string;
}
interface Task {
  taskName: string;
  assignedTo: User | null;
}

@Component({
  selector: 'app-assigntask',
  templateUrl: './assigntask.component.html',
  styleUrls: ['./assigntask.component.css']
})
export class AssigntaskComponent  implements OnInit {

  taskArray = [{ taskName: 'work hard', assignedTo: null }];


  users: User[] = [];

  selectedUser: User | null = null;

  constructor(private AuthService:AuthService){
   
  }
  ngOnInit() {
    this.getUserData();
  }


  
  // getUserData() {
  //   this.AuthService.getUserData().subscribe(
  //     (data: any) => {
  //       if (data && data.status === true && Array.isArray(data.users)) {
  //         this.users = data.users;
  //         console.log('Users:', this.users);
  //       } else {
  //         console.error('Invalid user data received:', data);
          
  //       }
  //     },
  //     error => {
  //       console.error('Error fetching user data:', error);
        
  //     }
  //   );
  // }
  getUserData() {
    this.AuthService.getUserData().subscribe(
      (data: any) => {
        if (data && data.status === true && Array.isArray(data.users)) {
          this.users = data.users.map(user => {
            return {
              userID: user.userID, // Assign the user ID if it's needed
              name: user.username // Extract and assign the username property
            };
          });
          console.log('Users:', this.users);
        } else {
          console.error('Invalid user data received:', data);
          // Handle the error, show user-friendly message, etc.
        }
      },
      error => {
        console.error('Error fetching user data:', error);
        // Handle error, show user-friendly message, etc.
      }
    );
  }
  
  
  

  onSubmit(form: NgForm) {
    if (this.selectedUser) {
      this.taskArray.push({
        taskName: form.controls['task'].value,
        assignedTo: this.selectedUser
      });

      form.reset();
      this.selectedUser = null;
    }
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }
}
