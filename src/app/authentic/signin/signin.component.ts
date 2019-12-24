import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {



  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
  }

  signInDetails = this.fb.group({

    email:["",[Validators.required,Validators.email]],
    password:["",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]

  })

  submit(){

    console.log(this.signInDetails.value);

  }

  register(){

    this.router.navigate(['./authentic/sign-up'])

  }

}
