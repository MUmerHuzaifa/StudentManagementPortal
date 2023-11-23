import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.css']
})
export class AdminPannelComponent {

  constructor(private authService: AuthService){
    const currentUserIdAcquired = this.authService.getLoggedInUserId();
    const currentUserNameAcquired = this.authService.getUserData();
    // alert("Logged in user id is" +currentUserIdAcquired);

        this.authService.getUserDataBasedOnRole().subscribe(
          details => {
            const userDetails = details;
            console.log('User Details are:', userDetails);    
          },
          error => {
            console.error('Error fetching user details:', error);
          }
        );
      
}


  notification_greetings:boolean=false;

  closeGreetings(){
    this.notification_greetings=true;
  }

}
