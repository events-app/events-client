import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
// import { Login } from './login';
import { Subscription } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  constructor(public dialog: MatDialog, private service: LoginService) { }

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
      if (result !== null && result !== undefined ) {
        this.username = result.username;
        this.password = result.password;
        this.service.sendCredentials('http://localhost:8000/api/v1/login', this.username, this.password);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
