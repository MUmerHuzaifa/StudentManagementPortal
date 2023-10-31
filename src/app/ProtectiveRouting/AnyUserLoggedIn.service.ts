// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { Observable, retry } from "rxjs";
// import { AuthorizedUsers } from "./Authorization.service";
// @Injectable()
// export class Any_User implements CanActivate{
//     constructor(private authService: AuthorizedUsers,private router: Router){

//     }
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     if(this.authService.IsAnyUserLoggedIn){
//         // this.router.navigate(['./navbar'])
//         return true;
//     }   
//     else {
//         this.router.navigate(['./login'])
//         return false;
//     }
//     }

// }