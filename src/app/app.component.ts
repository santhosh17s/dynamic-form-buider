import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

     this.dynamicForm = this._fb.group({})

  }

  addFormControl() {
    //let name = <FormArray>
    this.dynamicForm = this._fb.group({
       name:'',
       email:''
    })
  }

  saveForm(formValue) {
    console.log(formValue);
  }


}
