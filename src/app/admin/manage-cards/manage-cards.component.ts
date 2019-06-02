import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.component.html',
  styleUrls: ['./manage-cards.component.scss']
})
export class ManageCardsComponent implements OnInit {

  @Input() cardName: string;
  @Input() cardText: string;

  private payload: any;
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

  ngOnInit() {
  }

}
