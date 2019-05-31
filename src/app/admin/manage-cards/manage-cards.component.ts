import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.component.html',
  styleUrls: ['./manage-cards.component.scss']
})
export class ManageCardsComponent implements OnInit {

  public cardName: string;
  private payload: any;

  constructor(private http: HttpClient) { }

  public registerCard(): any {
    this.payload = {name: this.cardName, text: 'blabla'};
    return this.http.post('http://localhost:8000/api/v1/cards', this.payload);
  }

  ngOnInit() {
  }

}
