// navbar.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoleService } from '../user-role.service';
import { AuthorizedUsers } from '../ProtectiveRouting/Authorization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
 
  hideForStudent: boolean = true;
  hideForAdmin: boolean = true;
  switch_text: string = 'Login';
  GlobalRole : string = null;
  constructor(
    private userRoleService: UserRoleService,
    private authorizedUsers: AuthorizedUsers,
    private router: Router
  ) {}
  switch_mode(){
    // alert(this.switch_text)
    if(this.GlobalRole!=null){
      this.switch_text='Login'
      this.hideForStudent=true;
      this.hideForAdmin=true;
      this.router.navigate(['login']);
      localStorage.removeItem('currentUser')
    }
    else if (this.GlobalRole=='Student' || this.GlobalRole=='Admin'){
      this.switch_text='Logout'

    }
  }
  ngOnInit(): void {
    this.userRoleService.getUserRole().subscribe((userRole) => {
      // alert(userRole);
      this.GlobalRole=userRole;
      // Based on the user role, you may want to adjust the component's behavior
      if (userRole === 'Student') {
        this.switch_text = 'Logout';
        this.authorizedUsers.studentLogin();
        this.hideForStudent = false;
        this.router.navigate(['home']);
      } else if (userRole === 'Admin') {
        this.switch_text = 'Logout';
        this.authorizedUsers.adminLogin();
        this.hideForAdmin = false;
        this.router.navigate(['admin']);
      }

    });
    
  }

 
}
