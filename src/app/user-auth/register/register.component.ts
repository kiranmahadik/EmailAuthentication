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
  register_token: any;

  // register_url taken from insomnia
  register_url = 'http://basic-api.ngminds.com/auth/register';

  // sendVerificationEmail_url taken from insomnia
  sendVerificationEmail_url = 'http://basic-api.ngminds.com/auth/send-verification-email';

  constructor(private route: Router, private fb: FormBuilder, private userData: UsersDataService) {
  }

  ngOnInit(): void {
    this.userRegistration = this.fb.group({
      email: [''],
      password: [''],
      name: [''],
      company: ['']
    })
  }


  // register() method : it is called when register button is clicked
  register(): any {

    console.log(this.userRegistration);

    this.userData.postData(this.register_url, this.userRegistration.value).subscribe(data => {
      this.userName = data.user.name;
      this.register_token = data.token;

      this.userData.postEmail(this.sendVerificationEmail_url, this.register_token).subscribe((DataOne: any) => {
        console.log('Verification Email sent');
      });

      console.log('Data received', this.userName);
      console.log('Token from register : ', this.register_token);
      localStorage.setItem("Email", JSON.stringify(data.user.email));
      localStorage.setItem("Token", JSON.stringify(data.token));
    });

    this.route.navigate(['/user-auth/verify'], { queryParams: { token: this.register_token } }); // navigate to verify page

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
