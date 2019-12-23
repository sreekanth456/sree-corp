import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticRoutingModule } from './authentic-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [ SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    AuthenticRoutingModule
  ]
})
export class AuthenticModule { }
