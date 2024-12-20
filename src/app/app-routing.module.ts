import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'car', loadChildren: () => import('./main/car/car.module').then(m => m.CarModule) },
   { path: 'bike', loadChildren: () => import('./main/bike/bike.module').then(m => m.BikeModule) }, 
   { path: 'personal', loadChildren: () => import('./main/personal/personal.module').then(m => m.PersonalModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
