import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile-service/profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  // self_url taken from insomnia
  self_url = 'http://basic-api.ngminds.com/auth/self';

  // get token from localstorage and parse it.
  token = JSON.parse(localStorage.getItem('Token'));

  name: any;
  email: any;
  role: any;
  isEmailVerified: any;
  company: any;

  constructor(private profileService: ProfileService) { }


  ngOnInit(): void {

    console.log('Token from profile : ', this.token);

    /////////////////////////////////////////////////////////////////////////////////

    // calling service method getData()
    this.profileService.getData(this.self_url, this.token).subscribe(data => {
      this.name = data.name;
      this.email = data.email;
      this.role = data.role;
      this.isEmailVerified = data.isEmailVerified;
      this.company = data._org.name;
      console.log('Data received : ');
      console.log('Name : ', this.name);
      console.log('Email : ', this.email);
      console.log('Company : ', this.company);
    });

    ////////////////////////////////////////////////////////////////////////////////

  }

}
