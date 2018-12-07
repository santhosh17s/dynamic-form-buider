import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MealsFormService } from './services/meals-form.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
  providers: [
    MealsFormService
  ]
})
export class MealsComponent implements OnInit {

 public group: FormGroup;
  

  constructor(private mealsFormService: MealsFormService) {    }

  ngOnInit() {
    this.group = this.mealsFormService.form
  }

  submit(form){

  }

  reset(){

  }

}
