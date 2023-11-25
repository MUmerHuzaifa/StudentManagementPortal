import { OnInit,Component } from '@angular/core';
import { FormArray, FormControl, FormGroup ,Validators } from '@angular/forms';
import { noSpaceAllowed } from '../Validators/noSpaceAllowed.validator';
import { UserRoleService } from '../user-role.service';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  Login_RF: FormGroup;

  registration = {
    email: '',
    password: '',
   
  };
  constructor(private apiService:AuthService , private router: Router, private userRoleService: UserRoleService ) {
   

  }
ngOnInit(){
  const emailPattern = '^[\\w]+([\\.-]?[\\w]+)*@[\\w]+([\\.-]?[\\w]+)*(\\.\\w{2,3})+$';
  this.Login_RF=new FormGroup({
    email : new FormControl(null,[Validators.required,noSpaceAllowed,Validators.pattern(emailPattern)]),
    password :  new FormControl(null,[Validators.required,Validators.maxLength(30),Validators.minLength(4)]),
    
  })
}
onFormSubmitted(){
  
this.apiService.loginUser(this.registration).subscribe(
  response => {
    console.log('login successful!', response);
    alert("login sucessful")
    this.apiService.getUserRole().subscribe(
      role => {
        localStorage.setItem('currentUser',role)
        const fetchedRole = role;
        console.log('User Role:', role);
        this.userRoleService.setUserRole(role);
        if(role=="Student"){
          this.router.navigate(['home'])
        } else if(role=="Admin"){
          this.router.navigate(['admin'])
        }
        //getting logged user detail only
        this.apiService.getUserDataBasedOnRole().subscribe(
          details => {
            const userDetails: any = details;
            const userDetailsString = JSON.stringify(userDetails);
            this.userRoleService.setUserDetails(userDetails);

            localStorage.setItem("userDetails", userDetailsString);
          },
          error => {
            console.error('Error fetching user details:', error);
          }
        );
          // getting all users data 
          if(role=='Admin'){
            this.apiService.getUserData().subscribe(
              allStudents => {
                const students: any = allStudents;
                const userDetailsString = JSON.stringify(students);
                localStorage.setItem("allStudents", userDetailsString);
              },
              error => {
                console.error('Error fetching all students:', error);
              }
            );
          }

        localStorage.setItem('switch_text_login','Login');
        localStorage.setItem('switch_text_logout','Logout');

      },
      error => {
        console.error('Error fetching user role:', error);
       
      }
    );
      
    
  },
  error => {
    alert(
     
      `error while login ${JSON.stringify(error) }`
    )
    console.error('login failed:', error);
    
  }
);
}

}