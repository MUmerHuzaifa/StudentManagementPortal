import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskAssignmentDataService {
    private apiUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient) {
        // Start listening for the browser close event when the service is instantiated
    
    }
    
    getTasksForUser(userId: any): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/getTasks/${userId}`);
      }

    assignTaskToUser(Task: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/assignTask/`, Task).pipe(
          map(response => {
            if (response) {
              console.log("Assigned task succesffuly")
            }
            return response;
          })
        );
      }
}