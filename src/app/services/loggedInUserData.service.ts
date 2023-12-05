
// user-role.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleBasedUserDataService {

  constructor(private http: HttpClient) {
    // Start listening for the browser close event when the service is instantiated

  }

  loggedInUserId: Subject<any> = new Subject<any>();

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

  getUserData():Observable<any>{
    console.log("User Data from Service (RoleBasedDataService)",this.userDetails.asObservable())
    return this.userDetails.asObservable();
  }

  setUserDetails(details:any){
    this.userDetails.next(details)

  }

  setRememberMe(details:any){
    this.rememberMeCheck.next(details)
  }

  getRememberMe():Observable<any>{
    return this.rememberMeCheck.asObservable();
  }

  setAllUsersData(usersData:any){
    this.allUsersData.next(usersData)
  }

  getAllUsersData():Observable<any>{
    return this.allUsersData.asObservable();
  }

  setLoggedInUserId(userId:any){
    this.loggedInUserId.next(userId)
  }

  getLoggedInUserId():Observable<any>{
    return this.loggedInUserId.asObservable();
  }





}