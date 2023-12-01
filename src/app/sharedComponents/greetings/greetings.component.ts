import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent {

  notification_greetings: boolean = false;

  userRole = localStorage.getItem('currentUser')
  closeGreetings() {
    this.notification_greetings = true;
  }
}
