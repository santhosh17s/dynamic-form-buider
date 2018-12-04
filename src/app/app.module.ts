import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from 'src/app/dynamic-form/dynamic-form.module';

import { APP_MODULE_DECLARATIONS, APP_MODULE_IMPORTS } from './app.module.dependencies';

@NgModule({
  declarations: [
    AppComponent,
     ...APP_MODULE_DECLARATIONS
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DynamicFormModule,
    ...APP_MODULE_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
