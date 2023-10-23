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

  // Patterns are defines ineach Component depending upon their use