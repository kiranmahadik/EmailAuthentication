import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  UserRegistration!: FormGroup;

  constructor(private route: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.UserRegistration = this.fb.group({
      email: [''],
      password: [''],
      fullName: [''],
      companyName: ['']
    })

  }

  loadLogin(): any {
    this.route.navigate(['/user-auth/login']); // navigate to login page

    let email = this.UserRegistration.value.email;
    let password = this.UserRegistration.value.password;
    let fullName = this.UserRegistration.value.fullName;
    let compantName = this.UserRegistration.value.companyName;
    console.warn(this.UserRegistration.value);
    //console.warn('email is : ' + email);


  }



}
