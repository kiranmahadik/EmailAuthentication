import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyService } from '../../services/verify-service/verify.service';



@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  token: any;
  error: any;

  constructor(private verifyService: VerifyService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /* this.activatedRoute.queryParams
      .subscribe(params => {
        this.token = params['token'];
        console.log('token from verify :', this.token);
        //console.log(params);
      }); */

  }


  // verifyEmail() method is called when Verify button is clicked.
  verifyEmail() {

    this.activatedRoute.queryParams
      .subscribe(params => {
        this.token = params['token'];
        console.log('token from verify :', this.token);
        //console.log('verify info : ', params);
        //this.token = JSON.stringify(this.token)
      });

    this.verifyService.verifyMail(this.token).subscribe(
      {
        next: (data: any) => {
          // console.log('verified successfully')
          this.router.navigate(['/user-auth/login']);
        },
        error: (err) => {
          this.error = err.error.message;
        }
      });
  }


}
