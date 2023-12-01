import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, retry } from "rxjs";
import { AuthorizedUsers } from "./authorization.service";
@Injectable()
export class Role_Admin implements CanActivate{
    constructor(private authService: AuthorizedUsers,private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.IsAdminAuthenticated() && localStorage.getItem('currentUser')=='Admin'){
        return true;
    }   
    else {
        this.router.navigate(['./login'])
        return false;
    }
    }

}