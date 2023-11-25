import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
  GlobalRole: string = null;

  constructor(
    private userRoleService: UserRoleService,
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
    } else {
      this.switch_text = 'Logout';
      if (this.GlobalRole === 'Student') {
        this.authorizedUsers.studentLogin();
        this.hideForStudent = false;
        this.router.navigate(['home']);
      } else if (this.GlobalRole === 'Admin') {
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
        // Check if the page is being refreshed
        if (performance.navigation.type === 1) {
          // Page is being refreshed, check localStorage for user role
          const storedUserRole = localStorage.getItem('currentUser');
          if (storedUserRole) {
            this.handleUserRole(storedUserRole);
            return; // Exit ngOnInit early if page is being refreshed and user role is found in localStorage
          }
        }

        // If not refreshed or user role not found in localStorage, fetch user role from the server
        this.userRoleService.getUserRole().subscribe((userRole) => {
          this.handleUserRole(userRole);
        });
      }
    });
  }

  private handleUserRole(userRole: string | null): void {
    this.GlobalRole = userRole;

    // Based on the user role, you may want to adjust the component's behavior
    if (userRole === 'Student' || userRole === 'Admin') {
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

    if (userRole === 'Student') {
      this.authorizedUsers.studentLogin();
      this.hideForStudent = false;
      this.router.navigate(['home']);
    } else if (userRole === 'Admin') {
      this.authorizedUsers.adminLogin();
      this.hideForAdmin = false;
      this.router.navigate(['admin']);
    }
  }
}