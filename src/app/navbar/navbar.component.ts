import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { Urls } from '../model/urls';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public cards: Observable<any[]>;
  public activeLink;
  public links: Urls[] = [];

  @ViewChild(MatMenuTrigger, {static: false}) cardsMenu: MatMenuTrigger;

  constructor(private http: HttpClient) {}

  private getCards(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8000/api/v1/cards');
  }

  ngOnInit() {
    this.links.push({name: 'Home', route: '/'});
    this.links.push({name: 'Events', route: '/main'});
    this.links.push({name: 'Contact', route: '/main'});
  }

  public openCardsMenu(): void {
    this.cards = this.getCards();
    this.cardsMenu.openMenu();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
