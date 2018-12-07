import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef( ()=> StarRatingComponent ),
      multi: true
    }
  ]
})
export class StarRatingComponent implements ControlValueAccessor {

  private stars:boolean[] = Array(5).fill(false)

  constructor() {
    //this.rate(3);
   }

  ngOnInit() {
    //console.log(this.value)
  }

  get value():number{
    return this.stars.reduce( (total, starred ) => {
      return total + (starred ? 1 : 0);
    }, 0 )
  }

  rate(rating: number){
    this.writeValue(rating);
    
  }

  propagateChange = (rating: number) => {};

  writeValue(rating:number){
    this.stars = this.stars.map((_,i) => rating > i );
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

}
