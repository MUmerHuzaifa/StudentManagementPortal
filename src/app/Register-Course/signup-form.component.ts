import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';
import { lessThanOneNotAllowed, noAlphabetsAllowed, noFloatingNumbersAllowed, noNumericAllowed, noSpaceAllowed } from '../Validators/noSpaceAllowed.validator';
 
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
 
  RegisterCourse_RF : FormGroup;
 
  ngOnInit(): void {
      this.RegisterCourse_RF=new FormGroup({
        CourseName : new FormControl (null,[Validators.required,noSpaceAllowed,noNumericAllowed,Validators.maxLength(30)]),
        CreditHour : new FormControl (null,[Validators.required,noSpaceAllowed,noAlphabetsAllowed,Validators.maxLength(1),lessThanOneNotAllowed]),
      })
  }
 
 
 
  onSubmit(){
   
  }
  // email = new FormControl('', [Validators.required, Validators.email]);
 
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
 
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
 
}
 
 