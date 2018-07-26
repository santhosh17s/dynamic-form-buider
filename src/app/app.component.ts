import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  config = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
    },
  ];
  
  title = 'app';

  baseForm: FormGroup;
  dynamicForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {

     // we will initialize our form here
     this.baseForm = this._fb.group({
       name:'Santhosh',
       email:'santhosh@gmail.com'
     });

     this.dynamicForm = this._fb.group({
       users: this._fb.array([])
     })

  }

  initControls() {
    return this._fb.group({name:'', email:''});
  }

  addFormControl() {
    let controls = <FormArray>this.dynamicForm.controls['users'];
    controls.push(this.initControls());
   
  }

  saveForm(formValue) {
    console.log(formValue);
  }


}
