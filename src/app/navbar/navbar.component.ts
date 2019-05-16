import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private error: any;
  public cards: Record<number, string> = {};

  @ViewChild(MatMenuTrigger) cardsMenu: MatMenuTrigger;

  constructor(private http: HttpClient) {}

  private getCards(){
    return this.http.get("http://localhost:8000/api/v1/cards");
  }

  private mapCards(): void {
    this.subscription = this.getCards().subscribe((data: any[]) => {
      for (let i = 0; i < data.length; i++) {
        this.cards[data[i].id] = data[i].name;
      }
    },
    error => this.error = error
    );
  }

  ngOnInit() {
    this.mapCards();
  }

  public openCardsMenu(): void {
    this.cardsMenu.openMenu();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
