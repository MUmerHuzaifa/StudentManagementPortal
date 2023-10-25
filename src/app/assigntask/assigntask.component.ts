import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-assigntask',
  templateUrl: './assigntask.component.html',
  styleUrls: ['./assigntask.component.css']
})
export class AssigntaskComponent {

  taskArray = [{ taskName: 'work hard', assignedTo: null }];

  users: User[] = [
    { id: 1, name: 'student 1' },
    { id: 2, name: 'student 2' },
    // Add more users as needed
  ];

  selectedUser: User | null = null;

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
