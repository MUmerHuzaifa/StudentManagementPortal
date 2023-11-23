import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; 
 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ngOnInit(): void {
      
  }

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

currentUserDetails={
  username : '' ,
  email: '',
  role: '',
  _id: '',
}
  notification_greetings:boolean=false;

  closeGreetings(){
    this.notification_greetings=true;
  }

  


}
