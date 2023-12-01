import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RoleBasedUserDataService } from '../services/loggedInUserData.service';
import { TaskAssignmentDataService } from '../services/taskAssignment.service';

@Component({
  selector: 'app-show-assigned-tasks',
  templateUrl: './show-assigned-tasks.component.html',
  styleUrls: ['./show-assigned-tasks.component.css']
})
export class ShowAssignedTasksComponent implements OnInit {
  userId:number=0;
  taskAssigned:any []=[];

  ngOnInit(): void {
    this.userId = this.authService.getLoggedInUserId();
     this.taskAssignmentDataService.getTasksForUser(this.userId).subscribe((task) => {
    this.showTask(task);
  });
          
  }
    constructor(
      private authService: AuthService,
      private taskAssignmentDataService:TaskAssignmentDataService
    ) {}

  showTask(task: any) {
    this.taskAssigned = task.map(item => item.Task);
    console.log(this.taskAssigned);
  }


}
