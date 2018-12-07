import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from 'src/app/dynamic-form/dynamic-form.module';

import { APP_MODULE_DECLARATIONS, APP_MODULE_IMPORTS } from './app.module.dependencies';
import { PizzaComponent } from './pizza/pizza.component';

import { AppRouteModule } from './router/app-route.module';
import { HomeComponent } from './home/home.component';
import { MealsComponent } from './meals/meals.component';
import { SelectedMealViewerComponent } from './meals/component/selected-meal-viewer/selected-meal-viewer.component';
import { MealSizePickerComponent } from './meals/component/meal-size-picker/meal-size-picker.component';

@NgModule({
  declarations: [
    AppComponent,
     ...APP_MODULE_DECLARATIONS,
     PizzaComponent,
     HomeComponent,
     MealsComponent,
     SelectedMealViewerComponent,
     MealSizePickerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DynamicFormModule,
    ...APP_MODULE_IMPORTS,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
