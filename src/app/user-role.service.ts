
// user-role.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  private userRoleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private userDetails = new BehaviorSubject<any>(null);
  private rememberMeCheck = new BehaviorSubject<any>(null);
  private allUsersData = new BehaviorSubject<any> (null);

  userDetails$: Observable<any> = this.userDetails.asObservable();

  setUserRole(role: string) {
    this.userRoleSubject.next(role);
  }

  getUserRole(): Observable<string> {
    return this.userRoleSubject.asObservable();
  }

  getUserData():Observable<object>{
    return this.userDetails.asObservable();
  }

  setUserDetails(details:any){
    this.userDetails.next(details)
  }

  setRememberMe(details:any){
    this.rememberMeCheck.next(details)
  }

  getRememberMe():Observable<object>{
    return this.rememberMeCheck.asObservable();
  }

  setAllUsersData(usersData:any){
    this.allUsersData.next(usersData)
  }

  getAllUsersData():Observable<any>{
    return this.allUsersData.asObservable();
  }

}