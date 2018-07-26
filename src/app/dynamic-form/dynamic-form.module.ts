import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormComponent } from "./container/dynamic-form.component";
import { FormInputComponent } from "./components/form-input/form-input.component";
import { FormSelectComponent } from "./components/form-select/form-select.component";
import { FormButtonComponent } from "./components/form-button/form-button.component";



@NgModule({
    imports: [ CommonModule, ReactiveFormsModule],
    declarations: [
        DynamicFormComponent,
        FormInputComponent,
        FormSelectComponent,
        FormButtonComponent
    ],
    exports: [DynamicFormComponent]
})
export class DynamicFormModule {

}