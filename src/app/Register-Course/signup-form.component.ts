import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AuthService } from '../auth.service';
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
  Courseregistration = {
    courseName:"",
    CourseId:"",
    creditHourse:"",
    section:"A",
  };
 
  ngOnInit(): void {
      this.RegisterCourse_RF=new FormGroup({
        CourseName : new FormControl (null,[Validators.required,noSpaceAllowed,noNumericAllowed,Validators.maxLength(30)]),
        CreditHour : new FormControl (null,[Validators.required,noSpaceAllowed,noAlphabetsAllowed,Validators.maxLength(1),lessThanOneNotAllowed]),
      })
  }
 
  constructor(private apiService:AuthService  ) {

  }
 
  onSubmit(){
    this.apiService.registerCourse(this. Courseregistration).subscribe(
      response => {
        console.log('course registration successful!', response);
        alert("register sucessful")
        
        // this.router.navigate(['admin'])
        
      },
      error => {
        // alert(
         
        //   "error while register"
        // )
        // console.error('register failed:', error);
        
      }
    );
  }
  
}
 
 