import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { noNumericAllowed, noSpaceAllowed } from '../Validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  RegisterUser_RF: FormGroup;

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
  }

}


// this.Login_RF=new FormGroup({
//   email : new FormControl(null,[Validators.required,noSpaceAllowed,Validators.pattern(emailPattern)]),
//   password :  new FormControl(null,Validators.required),
//   skills : new FormArray([
//     new FormControl('skill 1',Validators.required),


//   ])