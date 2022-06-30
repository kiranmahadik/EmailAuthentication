import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getData(self_url, token) {
    console.log('url : ', self_url);
    console.log('token : ', token);

    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    // calling get() method
    return this.http.get<any>(self_url, { headers: httpHeaders }
    );
  }
}
