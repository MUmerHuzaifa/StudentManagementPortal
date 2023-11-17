import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizedUsers } from '../ProtectiveRouting/Authorization.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authorizedUsers: AuthorizedUsers, private router: Router) {
  }


  hideForStudent:boolean=true;
  hideForAdmin:boolean=true;
  
  switch_text:string ='Login'
  switch_text_admin:string ='Login'

  switch_mode(){
    if(this.switch_text =='Login'){
      this.switch_text='Logout'
      this.authorizedUsers.studentLogin();
      this.hideForStudent=false;
      this.router.navigateByUrl('/home');
    }

    else if(this.switch_text =='Logout'){
      this.switch_text='Login'
      this.authorizedUsers.studentLogout();
      this.hideForStudent=true;
      this.router.navigateByUrl('/login');
    }
  }

  switch_mode_admin(){
    if(this.switch_text_admin =='Login'){
      this.switch_text_admin='Logout'
      this.authorizedUsers.adminLogin();
      this.hideForAdmin=false;
      this.router.navigateByUrl('/admin');
    }

    else if(this.switch_text_admin =='Logout'){
      this.switch_text_admin='Login'
      this.authorizedUsers.adminLogout();
      this.hideForAdmin=true;
      this.router.navigateByUrl('/login');
    }
  }

}
