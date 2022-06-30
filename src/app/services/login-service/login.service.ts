import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postData(login_url, userLogin) {
    // Simple POST request with a JSON body and response type <any>
    return this.http.post<any>(login_url,
      userLogin
    )
  }

}
