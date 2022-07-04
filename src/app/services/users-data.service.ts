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
    // post() method's second parameter is data, but here we don't have data.
    // So we have to give empty string ("") as a second parameter.
    return this.http.post<any>(sendVerificationEmail_url, "", { headers: httpHeaders });
  }
}
