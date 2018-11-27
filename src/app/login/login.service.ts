import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  sendCredentials(url, username, password): void {
    this.http.post(url, {'username': username, 'password': password}).subscribe( result => { console.log(result); },
      error => console.log(error)
      );
  }
}
