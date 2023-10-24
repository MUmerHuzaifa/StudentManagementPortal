import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, retry } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable()
export class CourseGuardService implements CanActivate{
    constructor(private authService: AuthService,private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.IsAuthenticated()){
        return true;
    }   
    else {
        this.router.navigate(['./login'])
        return false;
    }
    }

}