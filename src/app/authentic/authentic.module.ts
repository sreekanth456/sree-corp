import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticRoutingModule } from './authentic-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [ SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    AuthenticRoutingModule,
    MaterialModule
  ]
})
export class AuthenticModule { }
