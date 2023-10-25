import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(
    private http : HttpClient
  ) { }

  registerUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, data);
  }

  loginUser(data:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`,data)
  }
}
