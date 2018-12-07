import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categoryForm: FormGroup;
  categorylist = [];
  products: any[] = [{"title":"Harddisk",
                    "description":"lorem Ipsum",
                    "Category":"Hardware",
                    "price":"150",
                    "availableQuantity":"40",
                      "DayToShip":"3",
                      "warranty":"356"
                    },
                    {"title":"Mobile",
                    "description":"lorem Ipsum",
                    "Category":"Hardware",
                    "price":"150",
                    "availableQuantity":"40",
                      "DayToShip":"3",
                      "warranty":"356"
                    },
                    {"title":"Desktop",
                    "description":"lorem Ipsum",
                    "Category":"Hardware",
                    "price":"150",
                    "availableQuantity":"40",
                      "DayToShip":"3",
                      "warranty":"356"
                    },
                    {"title":"Adobe CC",
                    "description":"lorem Ipsum",
                    "Category":"Software",
                    "price":"150",
                    "availableQuantity":"40",
                      "DayToShip":"3",
                      "warranty":"356"
                    },
                    {"title":"MS office",
                    "description":"lorem Ipsum",
                    "Category":"Software",
                    "price":"250",
                    "availableQuantity":"2",
                      "DayToShip":"1",
                      "warranty":"356"
                    }];
    productcopy;                

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.productcopy = this.products.slice();
    this.categorylist = this.products.map( (item) => item.Category);
    this.categorylist = Array.from(new Set(this.categorylist));
    //console.log(this.categorySelect);

    this.categoryForm = this.fb.group({
      category: ['']
    });

    //this.categoryForm.controls['category'].setValue('Select Cat', {onlySelf: true})

    //console.log(this.categoryForm)
  }

  categorySelect(res){
      let arr = [];
      this.productcopy = this.products.filter( (item) => item.Category == res);
  }

  categoryReset(){
    this.categoryForm.reset();
    this.productcopy = this.products.slice();
  }

}
