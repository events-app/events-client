import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  // credentials: Login;
  username: string;
  password: string;
  subscription: Subscription;

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { username: this.username, password: this.password }
    });

    this.subscription = dialogRef.afterClosed().subscribe(result => {
      this.username = result.username;
      this.password = result.password;
      this.sendCredentials('http://localhost:8000/api/v1/content/login');
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  sendCredentials(url): void {
    this.http.post(url, {'username': this.username, 'password': this.password});
  }

}
