import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtToken } from './jwttoken';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private jwtToken: JwtToken;

  constructor(private http: HttpClient) { }
  
  sendCredentials(url, username, password): void {
    this.http.post(url, {'username': username, 'password': password}).subscribe(result =>
      { 
        this.setToken(result);
        localStorage.setItem('token', stringify(this.getToken()).replace('token=',''));
      },
        error => console.log(error)
      );
  }

  private getToken(): JwtToken {
    // check whether JWT Token is already taken or needs to be generated
    return this.jwtToken;
  }

  private setToken(result: any) {
    this.jwtToken = result;
  }
}
