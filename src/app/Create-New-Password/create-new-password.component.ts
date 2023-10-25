import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.css']
})
export class CreateNewPasswordComponent implements OnInit {
  NewPassword_RF: FormGroup;

  ngOnInit(){
    this.NewPassword_RF=new FormGroup({
      newPassword: new FormControl(null,[Validators.required,Validators.maxLength(30),Validators.minLength(4)]),
      confirmPassword: new FormControl(null,[Validators.required,Validators.maxLength(30),Validators.minLength(4)])
    })
    
  }
  newPasswordFormSubmit(){

  }

}
