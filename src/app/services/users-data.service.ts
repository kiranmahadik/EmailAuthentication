import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http: HttpClient) { }


  postData(register_url, userRegistration) {
    return this.http.post<any>(register_url,
      userRegistration
    )
  }

  postEmail(sendVerificationEmail_url, register_token) {

    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${register_token}`
    });

    return this.http.post<any>(sendVerificationEmail_url, "", { headers: httpHeaders });
  }
}
