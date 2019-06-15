import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild(MatMenuTrigger, {static: false}) adminMenu: MatMenuTrigger;

  constructor() { }

  ngOnInit() {}

  public openAdminMenu(): void {
    this.adminMenu.openMenu();
  }

}
