import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, retry } from "rxjs";
import { AuthorizedUsers } from "./authorization.service";
@Injectable()
export class LoginGuard implements CanActivate{
    constructor(private authService: AuthorizedUsers,private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.isLoggedIn()){
        this.router.navigate(['/home']);
        return true;
    }   
    else {
        this.router.navigate(['./login'])
        return false;
    }
    }

}