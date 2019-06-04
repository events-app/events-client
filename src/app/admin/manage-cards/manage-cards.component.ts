import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.component.html',
  styleUrls: ['./manage-cards.component.scss']
})
export class ManageCardsComponent implements OnInit, OnDestroy {

  @Input() cardName: string;
  @Input() cardText: string;

  private payload: any;
  public cards: PreparedCards;
  private subscription: Subscription;
  public displayedColumns = ['id', 'name', 'text', 'dateCreated', 'dateUpdated']
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {

   }

  public registerCard(): any {
    this.payload = {name: this.cardName, text: this.cardText};
    return this.http.post<any>('http://localhost:8000/api/v1/cards', this.payload, this.httpOptions).subscribe();
  }

  private getCards() {
    this.subscription = this.http.get<PreparedCards>("http://localhost:8000/api/v1/cards").subscribe(content => {
       this.cards = <PreparedCards>content;
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
