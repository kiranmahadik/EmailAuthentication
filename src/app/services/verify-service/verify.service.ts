import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VerifyService {
  // verifyMailUrl taken from insomnia
  verifyMailUrl = 'http://basic-api.ngminds.com/auth/verify-email';

  constructor(private http: HttpClient) { }

  verifyMail(verfiyToken: any) {
    let finalUrl = this.verifyMailUrl + '?token=' + verfiyToken;
    let data = '';
    console.log('finalUrl : ', finalUrl);
    return this.http.post<any>(finalUrl, data);

  }



}
