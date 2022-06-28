import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersDataService } from '../../services/users-data.service'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegistration!: FormGroup;
  userName: any;
  url = 'http://basic-api.ngminds.com/auth/register';

  constructor(private route: Router, private fb: FormBuilder, private userData: UsersDataService) {
  }

  ngOnInit(): void {
    this.userRegistration = this.fb.group({
      email: [''],
      password: [''],
      name: [''],
      company: ['']
    })

    /* console.log('Form data : ', this.UserRegistration.value);
    console.log(this.user);
    this.userData.postData(this.url, this.UserRegistration).subscribe(data => {
      this.userName = data.user.name;
      console.log('Data received', this.userName);
    }); */

  }

  register(): any {

    console.log(this.userRegistration);

    this.userData.postData(this.url, this.userRegistration.value).subscribe(data => {
      this.userName = data.user.name;
      console.log('Data received', this.userName);
    });


    /* let email = this.UserRegistration.value.email;
    let password = this.UserRegistration.value.password;
    let fullName = this.UserRegistration.value.fullName;
    let compantName = this.UserRegistration.value.companyName;
    console.warn(this.UserRegistration.value);
    console.warn('email is : ' + email); */




  }

  loadLogin(): any {

    this.route.navigate(['/user-auth/login']); // navigate to login page
  }


}
