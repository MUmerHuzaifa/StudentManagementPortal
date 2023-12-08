import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AuthService } from '../services/auth.service';
import { CourseDataService } from '../services/courseData.service';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { lessThanOneNotAllowed, noAlphabetsAllowed, noFloatingNumbersAllowed, noNumericAllowed, noSpaceAllowed } from '../sharedComponents/customValidations/validations.validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {

  courseCodes = ['DIP-111', 'AI-222', 'QP-333', 'EP-444'];
  courseNames = ['Digital Image Processing', 'Artificial Intelligence', 'Quantum Physics', 'Engineering Professionalism'];

  selectedCourseCode: string;
  selectedCourseName: string;


  RegisterCourse_RF: FormGroup;

  Courseregistration = {
    courseId: '',
    courseName: '',
    creditHours: '',
    section: '',
  }

  onCourseNameChange() {
    // Find the index of the selected course name
    const index = this.courseNames.indexOf(this.selectedCourseName);
  
    // Set the corresponding course code based on the index
    if (index !== -1) {
      this.selectedCourseCode = this.courseCodes[index];
    }
  }

  onCourseDetailsSubmit() {
    console.log(this.Courseregistration)
    this.onSubmit(this.Courseregistration);
  }
  clearForm() {
    this.Courseregistration.courseId = '',
      this.Courseregistration.courseName = '',
      this.Courseregistration.creditHours = '',
      this.Courseregistration.section = ''
  }

  ngOnInit(): void {
    this.RegisterCourse_RF = new FormGroup({
      // CourseName : new FormControl (null,[Validators.required,noNumericAllowed,Validators.maxLength(50)]),
      courseId: new FormControl(null, [Validators.required]),
      CourseName: new FormControl(null, [Validators.required]),
      CreditHour: new FormControl(null, [Validators.required, noSpaceAllowed, noAlphabetsAllowed, Validators.maxLength(1), lessThanOneNotAllowed]),
      section: new FormControl(null, [Validators.required]),
    })
  }



  constructor(private apiService: AuthService, private courseDataService: CourseDataService) {

  }

  onSubmit(Data: any) {
    this.courseDataService.registerCourse(Data).subscribe(
      response => {
        console.log('course registration successful!', response);
        alert("register sucessful")

        // this.router.navigate(['admin'])

      },
      error => {
        alert(

          "error while register"
        )
        console.error('register failed:', error);

      }
    );
  }

}

