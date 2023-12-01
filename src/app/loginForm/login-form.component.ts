import { OnInit,Component } from '@angular/core';
import { FormArray, FormControl, FormGroup ,Validators } from '@angular/forms';
import { noSpaceAllowed } from '../sharedComponents/customValidations/validations.validator';
import { RoleBasedUserDataService } from '../services/loggedInUserData.service';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  Login_RF: FormGroup;
  loginPassed:boolean=true;
  loginFailed:boolean=true;

  registration = {
    email: '',
    password: '',
    rememberMe:'',
   
  };
  constructor(private authService:AuthService , private router: Router, private roleBasedUserDataService: RoleBasedUserDataService ) {
   

  }
ngOnInit(){
  const emailPattern = '^[\\w]+([\\.-]?[\\w]+)*@[\\w]+([\\.-]?[\\w]+)*(\\.\\w{2,3})+$';
  this.Login_RF=new FormGroup({
    email : new FormControl(null,[Validators.required,noSpaceAllowed,Validators.pattern(emailPattern)]),
    password :  new FormControl(null,[Validators.required,Validators.maxLength(30),Validators.minLength(4)]),
    rememberMe: new FormControl(null), 

  })
}
onFormSubmitted(){
  let rememberMeChecked = this.Login_RF.get('rememberMe').value;
  if(rememberMeChecked){
    this.roleBasedUserDataService.setRememberMe(rememberMeChecked);
    localStorage.setItem("rememberMe",rememberMeChecked);
  }

  // console.log("Remember me value"+rememberMeChecked)
this.authService.loginUser(this.registration).subscribe(
  response => {
    console.log('login successful!', response);
    // alert("login sucessful")
    this.loginPassed=false;
    this.loginFailed=true;

    this.authService.getUserRole().subscribe(
      role => {
    
        localStorage.setItem('currentUser',role)
        const fetchedRole = role;
        console.log('User Role:', role);
        this.roleBasedUserDataService.setUserRole(role);
        if(role=="Student"){
          this.router.navigate(['home'])
        } else if(role=="Admin"){
          this.router.navigate(['admin'])
        }
        //getting logged user detail only
        this.authService.getUserDataBasedOnRole().subscribe(
          details => {
            const userDetails: any = details;
            const userDetailsString = JSON.stringify(userDetails);
            this.roleBasedUserDataService.setUserDetails(userDetails);
            // localStorage.setItem("userDetails", userDetailsString);
          },
          error => {
            console.error('Error fetching user details:', error);
          }
        );
          // getting all users data 
        

        localStorage.setItem('switch_text_login','Login');
        localStorage.setItem('switch_text_logout','Logout');

      },
      error => {
        console.error('Error fetching user role:', error);
       
      }
    );
      
    
  },
  error => {
    this.loginFailed=false;
    // alert(
    //   `error while login ${JSON.stringify(error) }`
    // )
    console.error('login failed:', error);
    
  }
);
}

}