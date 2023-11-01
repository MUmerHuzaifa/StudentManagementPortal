import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.css']
})
export class AdminPannelComponent {


  notification_greetings:boolean=false;

  closeGreetings(){
    this.notification_greetings=true;
  }

}
