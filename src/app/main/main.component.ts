import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from './main.service';
import { Main } from './main';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MainService]
})
export class MainComponent implements OnInit, OnDestroy {

  main: Main;
  error: any;
  private subscription: Subscription;

  constructor(private service: MainService) { }

  url = 'https://mirek-mockapi.herokuapp.com/api/v1/content/main';

  showContent() {
    this.subscription = this.service.getContent(this.url).subscribe(data => this.main = {
      name: data['name'],
      text: data['text']
    },
    err => this.error = err
    );
  }

  ngOnInit() {
    this.showContent();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
