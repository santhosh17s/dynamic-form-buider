import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MealsFormService {

  public form: FormGroup;

  constructor(private fb: FormBuilder) { 

    this.form = this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        phoneNumber: [null, Validators.required],
        address: this.fb.group({
          street: [null, Validators.required],
          houseNum: [null, Validators.required],
          city: [null, Validators.required],
          floor: [null, Validators.required],
        })
     
    });

  }


}
