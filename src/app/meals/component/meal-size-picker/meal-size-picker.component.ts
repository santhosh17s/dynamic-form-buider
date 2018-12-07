import { Component, OnInit, forwardRef } from '@angular/core';
import { MealSizeEnum } from '../../services/meal-form.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-meal-size-picker',
  templateUrl: './meal-size-picker.component.html',
  styleUrls: ['./meal-size-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MealSizePickerComponent),
      multi: true
    }
  ]
})
export class MealSizePickerComponent implements ControlValueAccessor {

  mealSize: MealSizeEnum;
  MealSizeEnum: MealSizeEnum;

  constructor() { }

  ngOnInit() {
  }

  changeSize(size: MealSizeEnum){
    this.mealSize = size;
    this.propagateChange(size);
    console.log(size);
  }

  propagateChange = (value: MealSizeEnum) => {};
  writeValue(value: MealSizeEnum) {
    this.mealSize = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

}
