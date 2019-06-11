import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import {MatTable} from '@angular/material';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.component.html',
  styleUrls: ['./manage-cards.component.scss']
})
export class ManageCardsComponent implements OnInit, OnDestroy {

  @Input() cardName: string;
  @Input() cardText: string;

  @ViewChild(MatTable) table: MatTable<any>;

  private payload: any;
  public cards: PreparedCards[];
  private subscription: Subscription;
  public displayedColumns = ['name', 'dateCreated', 'dateUpdated']
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {

   }

  public registerCard(): any {
    this.payload = {name: this.cardName, text: this.cardText};
    this.http.post<any>('http://localhost:8000/api/v1/cards', this.payload, this.httpOptions).subscribe();
  }

  private getCards() {
    this.subscription = this.http.get('http://localhost:8000/api/v1/cards').subscribe((data: PreparedCards[]) => {
      this.cards = data;
    });
  }

  ngOnInit() {
    this.getCards();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

export interface PreparedCards {
  id: number;
  name: string;
  text: string;
  dateCreated: any;
  dateUpdated: any;
}
