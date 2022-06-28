import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http: HttpClient) { }


  postData(url, userRegistration) {
    // Simple POST request with a JSON body and response type <any>
    return this.http.post<any>(url,
      userRegistration
    )
  }
}
