import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardsService } from './cards.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cards } from './cards';
// import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private error: any;
  public text: String;
  public cards: Cards;

  constructor(private service: CardsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.getRouteId();
    this.showCard(id);
  }

  private showCard(id): void {
    this.subscription = this.service.getCard(id).subscribe(data => this.cards = {
      text: data['text'],
      name: data['name'],
      id: data['name']
    },
    error => this.error = error
    );
  }

  private getRouteId(): any {
    return this.route.snapshot.paramMap.get('id');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
