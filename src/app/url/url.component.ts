import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateUrl } from '../url.validator';


@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {

  private myForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      websiteUrl:['', [Validators.required, ValidateUrl]]
    })

  }

}
