import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car.component';
import { CarRegNoComponent } from './car-reg-no/car-reg-no.component';
import { CarModelComponent } from './car-model/car-model.component';
import { CarVarientComponent } from './car-varient/car-varient.component';
import { CarFuelTypeComponent } from './car-fuel-type/car-fuel-type.component';
import { CarPaymentDetailsComponent } from './car-payment-details/car-payment-details.component';
import { CarBrandComponent } from './car-brand/car-brand.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarComponent,
    CarRegNoComponent,
    CarModelComponent,
    CarVarientComponent,
    CarFuelTypeComponent,
    CarPaymentDetailsComponent,
    CarBrandComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    FormsModule,
  ],
  exports:[
    CarComponent,
    CarModelComponent,
  ]
})
export class CarModule { }
