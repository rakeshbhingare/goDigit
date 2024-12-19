import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
