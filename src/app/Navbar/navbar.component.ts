import { Component } from '@angular/core';
import { AuthorizedUsers } from '../ProtectiveRouting/Authorization.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authorizedUsers: AuthorizedUsers) {
  }

  hideForStudent:boolean=true;
  
  switch_text:string ='Login'
  switch_mode(){
    if(this.switch_text =='Login'){
      this.switch_text='Logout'
      this.authorizedUsers.adminLogin();
      this.authorizedUsers.studentLogin();
      this.hideForStudent=false;

    }
    else if(this.switch_text =='Logout'){
      this.switch_text='Login'
      this.authorizedUsers.adminLogout();
      this.authorizedUsers.studentLogout();
      this.hideForStudent=true;


    }
  }


}
