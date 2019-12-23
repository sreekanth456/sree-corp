import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticRoutingModule } from './authentic-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthenticRoutingModule
  ]
})
export class AuthenticModule { }
