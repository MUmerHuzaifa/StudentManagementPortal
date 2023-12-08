import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  selectedSection:string='All'

  allStudents: any[] = []; // Assuming this array is populated with user data
  filteredStudents:any [] = [];
  constructor(private authService: AuthService,private popUpModel:MatDialog) {
   
  }
  ngOnInit(): void {

    this.authService.getUserData().subscribe(
      allStudents => {
        // const students: any = allStudents;
        // let userDetailsString = JSON.stringify(students);
        this.allStudentsData(allStudents);
        // console.log(userDetailsString)

      },
      error => {
        console.error('Error fetching all students:', error);
      }
    ); 
  }
  onRoleChange(event:any){
    this.selectedSection = event.target.value;
    if(this.selectedSection == "All"){
      this.allStudents = this.filteredStudents.filter(user => user.role!='All');
    }
    else{
      this.allStudents = this.filteredStudents.filter(user => user.role.toLowerCase() === this.selectedSection.toLowerCase());
    }
    // this.allStudentsData(this.allStudents);
    console.log(this.selectedSection)

  }

    allStudentsData(allStu){
      let user = allStu.users;
      // let name = user[6]
      this.allStudents=allStu.users;
      this.filteredStudents=allStu.users;
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

    onEditUser(myData:any){
      const config: MatDialogConfig = {
        data: myData
      }
      this.popUpModel.open(PopupComponent,config)
      console.log("User is clicked with "+config)
    }

}
