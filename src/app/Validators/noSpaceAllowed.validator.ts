import { FormControl } from "@angular/forms";
 
 
export const noSpaceAllowed = (control:FormControl) =>{
    const value=control.value;
    if(value != null && value.includes(' ')){
        return {noSpaceAllowed:true}
    }
    return null;
}
 
 
export const trimSpace = (control: FormControl) => {
    const value = control.value;
    if (value != null && value.includes(' ')) {
      control.setValue(value.replace(/ /g, ''));
    }
    return null;
  };
 
  export const noAlphabetsAllowed = (control: FormControl) => {
    const value = control.value;
   
    if (value != null && /[A-Za-z]/.test(value)) {
      return { alphabetsNotAllowed: true };
    }
   
    return null;
  };
 
 
  export const noNumericAllowed = (control: FormControl) => {
    const value = control.value;
   
    if (value != null && /\d/.test(value)) {
      return { numericNotAllowed: true };
    }
   
    return null;
  };
 
  export function passwordMatchValidator(control: FormControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
 
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
 
  export const noFloatingNumbersAllowed = (control: FormControl) => {
    const value = control.value;
 
    // Check if the value is not null and contains a floating-point number
    if (value != null && /\d+\.\d+/.test(value)) {
      return { floatingNumbersNotAllowed: true };
    }
 
    return null;
  };
 
  export const lessThanOneNotAllowed = (control: FormControl) => {
    const value = parseFloat(control.value);
 
    if (isNaN(value)) {
      return { invalidNumber: true };
    }
 
    if (value <= 0) {
      return { invalidRange: true };
    }
 
    return null;
  };
  // Patterns are defines ineach Component depending upon their use