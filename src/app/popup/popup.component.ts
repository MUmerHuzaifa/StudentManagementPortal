import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { noNumericAllowed, noSpaceAllowed } from '../sharedComponents/customValidations/validations.validator';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  RegisterUser_RF: FormGroup;
  userId = this.apiService.getLoggedInUserId();
  Registered:boolean=true
  Failed:boolean=true
  passwordMissMatched:boolean=true
  populatedData:any={};
  registrationData:any={};
  idOfUserToUpdate:any;
 
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private apiService: AuthService, private router: Router) {
    // 'data' now contains the data passed to the dialog
    this.populatedData=data;
    this.idOfUserToUpdate=data._id;
    console.log(this.idOfUserToUpdate)
    console.log('Data received in the dialog:', this.populatedData);
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

    this.registrationData = {
      email: this.populatedData.email,
      password: 'default',
      confirmPassword: 'default',
      username: this.populatedData.username,
      role: this.populatedData.role
    };
   
  }
 
 
 
  onUpdateUser(){
 
    if (this.registrationData.password !== this.registrationData.confirmPassword) {
      console.error('Passwords do not match');
      this.passwordMissMatched=false;
      return;
  }
  this.apiService.updateUserById(this.idOfUserToUpdate,this.registrationData).subscribe(
    response => {
      console.log('Updation successful!', response);
      this.Registered=false;
      // alert("Registration sucessful")
    },
    error => {
      console.error('Updation failed:', error);
      this.Failed=false;
    }
  );
 
 
};
 
clearForm(){
  this.registrationData.email=''
  this.registrationData.username=''
  this.registrationData.password=''
  this.registrationData.confirmPassword=''
  this.registrationData.role=''
}

}
 
 
 