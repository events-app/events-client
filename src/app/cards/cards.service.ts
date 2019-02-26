import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  getCard(id) {
    return this.http.get("http://localhost:8000/api/v1/cards/" + id);
  }
}
