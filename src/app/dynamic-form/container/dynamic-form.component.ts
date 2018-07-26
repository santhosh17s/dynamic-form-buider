import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
    selector: 'dynamic-form',
    styleUrls: ['dynamic-form.component.scss'],
    template: `
      <form
        class="dynamic-form"
        [formGroup]="form"
        (ngSubmit)="submitted.emit(form.value)">
        <ng-container
            *ngFor="let field of config;"
            dynamicField
            [config]="field"
            [group]="form">
        </ng-container>
      </form>
    `
})
export class DynamicFormComponent implements OnInit {

    @Input() config: any[] = [];
    
    form: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.form = this.createGroup();
    }

    createGroup() {
        const group = this.fb.group({});
        this.config.forEach( control => group.addControl(control.name, this.fb.control('') ));
        return group;
    }

    @Output()
    submitted: EventEmitter<any> = new EventEmitter<any>();
  
}