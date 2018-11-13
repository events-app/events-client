import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from './main.service';
import { Main } from './main';
import { error } from '@angular/compiler/src/util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MainService]
})
export class MainComponent implements OnInit, OnDestroy {

  main : Main;
  error: any;
  subscription : Subscription;

  constructor(private service : MainService)  { }

  url = 'http://localhost:8000/api/v1/content/main/';

  showContent(){
    this.subscription = this.service.getContent(this.url).subscribe(data => this.main = {
      name: data['name'],
      text: data['text']
    },
    error => this.error = error
    );
  }

  ngOnInit() {
    this.showContent();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
