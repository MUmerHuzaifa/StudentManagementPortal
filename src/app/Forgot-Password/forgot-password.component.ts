import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { noSpaceAllowed } from '../Validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword_RF: FormGroup;

  ngOnInit(){
    const emailPattern = '^[\\w]+([\\.-]?[\\w]+)*@[\\w]+([\\.-]?[\\w]+)*(\\.\\w{2,3})+$';
    this.forgotPassword_RF=new FormGroup({
      email : new FormControl(null,[Validators.required,noSpaceAllowed,Validators.pattern(emailPattern)])
    })        
  }
  forgotPasswordFormSubmit(){

console.log(this.forgotPassword_RF)  }

}
