import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api';
  private loggedInUserId: number | null = null;

  constructor(
    private http : HttpClient
  ) { }

  registerUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, data)
    
  }
  getLoggedInUserId(): number | null {
    return this.loggedInUserId;
  }

  loginUser(data:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`,data).pipe(
      
      map(response => {
        if (response && response.userId) {
          this.loggedInUserId = response.userId;
        }
        return response;
      })
    );
  }

  getUserRole(): Observable<string> {
    if (!this.loggedInUserId) {
      throw new Error('User not logged in'); 
    }
  
    return this.http.get<any>(`${this.apiUrl}/${this.loggedInUserId}/role`).pipe(
      map(response => {
        if (response && response.role) {
          return response.role; 
        }
        throw new Error('Role not found in API response'); 
      })
    );
  }
  

  getUserData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getusers`);
  }
}


  

