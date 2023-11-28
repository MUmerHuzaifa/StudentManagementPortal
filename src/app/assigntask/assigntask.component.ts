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
              userID: user._id, // Assign the user ID if it's needed
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
      const taskData = {
        taskName: form.controls['task'].value,
        assignedTo: this.selectedUser,
      };
      console.log("Task is "+taskData.taskName)
      console.log("Id is "+taskData.assignedTo.userID)

      this.AuthService.assignTaskToUser(taskData.taskName,taskData.assignedTo.userID)
      .subscribe(
        response => {
          // Handle the success response if needed
          console.log('Task assigned successfully:', response);
        },
        error => {
          // Handle the error response if needed
          console.error('Error assigning task:', error);
        }
      );
      // Call another function with the task data
      this.sendTaskData(taskData);
  
      // Reset the form and selected user
      form.reset();
      this.selectedUser = null;
    }
  }
  
  sendTaskData(taskData: { taskName: string, assignedTo: User }) {
    // Add your logic here to handle the task data
    console.log('Task Data:', taskData);
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }
}
