import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login-service/login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin!: FormGroup;
  userEmail: any;
  token: any;

  // login_url taken from insomnia
  login_url = 'http://basic-api.ngminds.com/auth/login';

  constructor(private route: Router, private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.userLogin = this.fb.group({
      email: [''],
      password: ['']
    })
  }


  loadProfile() {
    this.route.navigate(['/home/profile']);
  }

  // login() method is called when form is submitted / login button is clicked.
  login() {
    this.loginService.postData(this.login_url, this.userLogin.value).subscribe(data => {
      this.userEmail = data.user.email;
      this.token = data.token;
      console.log('Data received and Email is : ', this.userEmail);
      console.log('Token is : ', this.token);
      localStorage.setItem("Email", JSON.stringify(data.user.email));
      localStorage.setItem("Token", JSON.stringify(data.token));
    });
  }

}
