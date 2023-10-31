import { Component } from '@angular/core';
import { IframePracticeComponent } from '../iframe-practice/iframe-practice.component'
 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  notification_greetings:boolean=false;

  closeGreetings(){
    this.notification_greetings=true;
  }

}
