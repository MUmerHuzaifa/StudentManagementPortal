import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
    private userDataSubject = new BehaviorSubject<any>(null);
    userData$ = this.userDataSubject.asObservable();
  
    setUserData(userData: any) {
      this.userDataSubject.next(userData);
    }
  
    getUserData(): any {
      return this.userDataSubject.value;
    }
}