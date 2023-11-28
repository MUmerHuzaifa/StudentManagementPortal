import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api';
  private loggedInUserId: number | null = null;
  private sessionTimeout = 1 * 60 * 1000; // 30 minutes in milliseconds
  private sessionTimer: any;
  private refreshing = false;
  rememCheck = '';



  constructor(private http: HttpClient) {
    // Start listening for the browser close event when the service is instantiated

    this.initBrowserCloseListener();


  }

  registerUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, data);
  }

  updateUserById(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/userId`, data);
  }

  deleteUserById(userId: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${userId}`);
  }

  registerCourse(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/courseregister`, data);
  }

  getLoggedInUserId(): number | null {
    return this.loggedInUserId;
  }

  loginUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, data).pipe(
      map(response => {
        if (response && response.userId) {
          this.loggedInUserId = response.userId;
          this.startSessionTimer();
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
    return this.http.get<any[]>(`${this.apiUrl}/getusers/`);
  }

  getUserDataBasedOnRole(): Observable<any[]> {
    const currentUserIdAcquired = this.getLoggedInUserId();
    console.log("current user id is" + currentUserIdAcquired);
    return this.http.get<any[]>(`${this.apiUrl}/${currentUserIdAcquired}`);
  }

  getTasksForUser(userId: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getTasks/${userId}`);
  }

  private startSessionTimer(): void {
    console.log(this.rememCheck)
    this.rememCheck = localStorage.getItem("rememberMe")
    console.log("in constrtcur " + this.rememCheck)
    if (this.rememCheck== 'true') {
      console.log("stored cookies")
    } else {
      this.sessionTimer = setTimeout(() => {
        if (!this.refreshing) {
          {
            this.logoutUser(); // Session timeout, logout user
          }
        }
      }, this.sessionTimeout);
    }

  }


  private resetSessionTimer(): void {
    clearTimeout(this.sessionTimer);
    this.startSessionTimer();
  }

  private logoutUser(): void {
    // Add logic to log the user out on the server-side if necessary

    // Clear local data
    this.loggedInUserId = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userDetails');
    localStorage.removeItem('allStudents');
    localStorage.removeItem('switch_text_login');
    localStorage.removeItem('switch_text_logout');

    // Navigate to the login page
    // You may need to inject the Router service to navigate
    // this.router.navigate(['/login']);
  }

  // Listen for browser close event
  private initBrowserCloseListener(): void {
    console.log(this.rememCheck)
    this.rememCheck = localStorage.getItem("rememberMe")
    console.log("in constrtcur " + this.rememCheck)
    if (this.rememCheck== 'true') {
      console.log("stored cookies")
    } else {
    window.addEventListener('beforeunload', (event) => {
      if (window.performance.navigation.type === 1) {
        this.refreshing = true; // Set the refreshing flag when the page is being refreshed
      } else {
        // if(this.rememCheck=='null'){
        this.logoutUser(); // Browser close event, logout user
        // }
      }
      // Check if the event is a page refresh

    });
  }}

  assignTaskToUser(task: any, userID: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/assignTask/${userID}`, task);
  }
}
