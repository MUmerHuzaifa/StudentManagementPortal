import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthorizedUsers } from "./authorization.service";

@Injectable()
export class Role_Student implements CanActivate {
    constructor(private authService: AuthorizedUsers, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (localStorage.getItem('currentUser') == 'Student' || localStorage.getItem('currentUser') == 'Admin') {
            if (this.authService.IsStudentAuthenticated() || this.authService.IsAdminAuthenticated()) {
                return true;
            } else {
                // Handle the case where the user is not authenticated
                // You might want to navigate to a different route or return a UrlTree
                this.router.navigate(['./login']);
                return false;
            }
        } else {
            // Handle the case where 'currentUser' is not 'Student'
            // You might want to navigate to a different route or return a UrlTree
            this.router.navigate(['./login']);
            return false;
        }
    }
}
