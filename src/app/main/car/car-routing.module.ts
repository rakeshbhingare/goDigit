import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car.component';
import { CarRegNoComponent } from './car-reg-no/car-reg-no.component';

const routes: Routes = [
  {path:'carreg',component:CarRegNoComponent},
  { path: '', component: CarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
