import { Component } from '@angular/core';
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
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-signup-form',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css'],
})
export class SignupFormComponent {
  defaultState='Punjab'
  defaultCity='Lahore'
  default='FA18-BCE-004'
  onSubmit(form: NgForm){
      console.log(form)
      alert("Confirm")
  }
  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  
}

