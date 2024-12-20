import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from '../app-routing.module';
import { BikeComponent } from '../main/bike/bike.component';
import { BikeModule } from '../main/bike/bike.module';
import { CarModelComponent } from '../main/car/car-model/car-model.component';
import { CarModule } from '../main/car/car.module';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
