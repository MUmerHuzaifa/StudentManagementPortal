// user-role.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  private userRoleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setUserRole(role: string) {
    this.userRoleSubject.next(role);
  }

  getUserRole(): Observable<string> {
    return this.userRoleSubject.asObservable();
  }
}
