import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UsersDataService } from '../../services/users-data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  loadVerify()
  {
    this.route.navigate(['/user-auth/verify']);
  }

  login(){
    
  }

}
