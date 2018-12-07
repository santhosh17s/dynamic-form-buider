import { Injectable } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MealFromValidatorsService {

  constructor() { }


  formValidator(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const errors: ValidationErrors = {};

      return Object.keys(errors).length ? errors : null; 

    }
  }

}
