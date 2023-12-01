import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  allStudents: any[] = []; // Assuming this array is populated with user data

  constructor(private authService: AuthService) {
   
  }
  ngOnInit(): void {

    this.authService.getUserData().subscribe(
      allStudents => {
        const students: any = allStudents;
        let userDetailsString = JSON.stringify(students);
        this.allStudentsData(allStudents);
        // console.log(userDetailsString)

      },
      error => {
        console.error('Error fetching all students:', error);
      }
    ); 
  }

    allStudentsData(allStu){
      let user = allStu.users;
      // let name = user[6]
      this.allStudents=allStu.users;
      console.log(user)
    }
    onDelete(id:any){
  
      this.authService.deleteUserById(id).subscribe(response=>{
        this.allStudents = this.allStudents.filter(user => user._id != id);
        console.log("Deleted")
        console.log(this.allStudents)
        console.log(id)
  
      },
      error=>{
        console.error('Failed to delete', error);
      })
  
    }

}
