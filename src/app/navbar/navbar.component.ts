import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public cards: Observable<any[]>;

  @ViewChild(MatMenuTrigger) cardsMenu: MatMenuTrigger;

  constructor(private http: HttpClient) {}

  private getCards(): Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8000/api/v1/cards");
  }

  ngOnInit() {
  }

  public openCardsMenu(): void {
    this.cards = this.getCards();
    this.cardsMenu.openMenu();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
