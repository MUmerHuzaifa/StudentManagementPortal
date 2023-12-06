import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TaskAssignmentDataService } from '../services/taskAssignment.service';

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
  taskAssignment=true;
  Failed=true;

  users: User[] = [];

  selectedUser: User | null = null;

  constructor(private taskAssignmentService:TaskAssignmentDataService,private AuthService:AuthService){
   
  }
  ngOnInit() {
    this.getUserData();
  }
  getUserData() {
    this.AuthService.getUserData().subscribe(
      (data: any) => {
        if (data && data.status === true && Array.isArray(data.users)) {
          this.users = data.users
          .filter(user => user.role === 'Student')
          .map(user => {
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
        Task: form.controls['task'].value,
        UserId: this.selectedUser.userID
      };
      console.log("Task is "+taskData.Task)
      console.log("Id is "+taskData.UserId)

      this.taskAssignmentService.assignTaskToUser(taskData)
      .subscribe(
        response => {
          // Handle the success response if needed
          this.taskAssignment=false;
          this.Failed=true;
          console.log('Task assigned successfully:', response);
        },
        error => {
          // Handle the error response if needed
          console.error('Error assigning task:', error);
          setTimeout(() => {
            this.taskAssignment = false;
          }, 3000);
          this.taskAssignment = true;
          this.Failed=false;
        }
      );
      // Call another function with the task data
      // this.sendTaskData(taskData);
  
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
