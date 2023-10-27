import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { noNumericAllowed, noSpaceAllowed } from '../Validators/noSpaceAllowed.validator';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  RegisterUser_RF: FormGroup;
  userId = this.apiService.getLoggedInUserId();
 

  registrationData = {
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    role: ''
  };

  constructor(private apiService:AuthService , private router: Router ) {

  }
  ngOnInit(){
    const emailPattern = '^[\\w]+([\\.-]?[\\w]+)*@[\\w]+([\\.-]?[\\w]+)*(\\.\\w{2,3})+$';
    this.RegisterUser_RF= new FormGroup({
      userName: new FormControl(null,[Validators.required,noNumericAllowed,Validators.maxLength(30)]),
      email: new FormControl(null,[Validators.required,noSpaceAllowed,Validators.pattern(emailPattern)]),
      password: new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
      cPassword: new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
      role: new FormControl(null,[Validators.required]),
    })
  }



  onRegisterFormSubmit(){

    if (this.registrationData.password !== this.registrationData.confirmPassword) {
      console.error('Passwords do not match');
      return;
  }
  this.apiService.registerUser(this.registrationData).subscribe(
    response => {
      console.log('Registration successful!', response);
      alert("Registration sucessful")
      this.router.navigate(['login']) 
    },
    error => {
      console.error('Registration failed:', error);
      
    }
  );
  

};














}


