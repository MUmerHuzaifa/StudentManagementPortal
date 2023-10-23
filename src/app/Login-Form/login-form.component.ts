import { OnInit,Component } from '@angular/core';
import { FormArray, FormControl, FormGroup ,Validators } from '@angular/forms';
import { noSpaceAllowed } from '../Validators/noSpaceAllowed.validator';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  Login_RF: FormGroup;
  
ngOnInit(){
  const emailPattern = '^[\\w]+([\\.-]?[\\w]+)*@[\\w]+([\\.-]?[\\w]+)*(\\.\\w{2,3})+$';
  this.Login_RF=new FormGroup({
    email : new FormControl(null,[Validators.required,noSpaceAllowed,Validators.pattern(emailPattern)]),
    password :  new FormControl(null,Validators.required),
    // skills : new FormArray([
    //   new FormControl('skill 1',Validators.required),


    // ])
  })
}
onFormSubmitted(){
  console.log(this.Login_RF)
}
// addSkills(){
//   (<FormArray>this.Login_RF.get('skills')).push(new FormControl(null,Validators.required))
// }
// deleteSkills(id: number){
// const controls = <FormArray>this.Login_RF.get('skills')
// controls.removeAt(id)
// }
}
