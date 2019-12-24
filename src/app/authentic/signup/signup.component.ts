import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
  }

  signUpDetails = this.fb.group({

    firstName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    lastName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    email:["",[Validators.required,Validators.email]],
    password:["",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    confirmPassword:["",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]

  })



  submit(){

    console.log(this.signUpDetails.value)


  }

  login(){

    this.router.navigate(['./authentic/sign-in'])

  }

}
