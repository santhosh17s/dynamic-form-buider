import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from '../app.component';
import { PizzaComponent } from '../pizza/pizza.component';
import { HomeComponent } from '../home/home.component';
import { MealsComponent } from '../meals/meals.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';

const routes: Routes = [
  { path: 'pizza', component: PizzaComponent },
  { path: 'meals', component: MealsComponent },
  { path: 'rating', component: StarRatingComponent },
  { path: 'home', component: HomeComponent },
  { path:'', redirectTo: 'home', pathMatch:'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule ]
})
export class AppRouteModule { }
