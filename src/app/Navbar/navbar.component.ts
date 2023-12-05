import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RoleBasedUserDataService } from '../services/loggedInUserData.service';
import { AuthorizedUsers } from '../protectiveRouting/authorization.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  hideForStudent: boolean = true;
  hideForAdmin: boolean = true;
  switch_text: string = 'Login';
  GlobalRole: string = null;

  constructor(
    private userRoleService: RoleBasedUserDataService,
    private authorizedUsers: AuthorizedUsers,
    private router: Router
  ) {}

  switch_mode() {
    if (this.GlobalRole != null) {
      this.switch_text = 'Login';
      this.hideForStudent = true;
      this.hideForAdmin = true;
      this.router.navigate(['login']);
      localStorage.removeItem('currentUser');
      localStorage.removeItem('userDetails');
      localStorage.removeItem('allStudents');
      localStorage.removeItem('switch_text_login');
      localStorage.removeItem('switch_text_logout');
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('userId');

    } else {
      this.switch_text = 'Logout';
      // window.location.reload();

      if (this.GlobalRole == 'Student') {
        this.authorizedUsers.studentLogin();
        this.hideForStudent = false;
        this.router.navigate(['home']);

      } else if (this.GlobalRole == 'Admin') {
        this.authorizedUsers.adminLogin();
        this.hideForAdmin = false;
        this.router.navigate(['admin']);

      }
    }
  }

  ngOnInit(): void {
    // Subscribe to route changes
   
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Fetch user role from the server when the component initializes
        this.userRoleService.getUserRole().subscribe((userRole) => {
          this.handleUserRole(userRole);
          // location.reload();
        });
      }
    });
  }
  
  handleUserRole(userRole: any){
    console.log("User role from navbar component is ",userRole)
    this.GlobalRole = userRole;

    // Based on the user role, you may want to adjust the component's behavior
    if (userRole == 'Student' || userRole == 'Admin') {
      this.switch_text = 'Logout';
    } else if(localStorage.getItem('currentUser')!=null ) {
      this.switch_text = 'Logout';
      if(localStorage.getItem('currentUser')=='Student'){
        this.hideForStudent = false;
      }
      else if(localStorage.getItem('currentUser')=='Admin'){
        this.hideForAdmin = false;
      }
      // this.hideForAdmin = false;
    }

    if (userRole == 'Student') {
      this.authorizedUsers.studentLogin();
      this.hideForStudent = false;
      this.router.navigate(['home']);
    } else if (userRole == 'Admin') {
      this.authorizedUsers.adminLogin();
      this.hideForAdmin = false;
      this.router.navigate(['admin']);
    }
  }
}