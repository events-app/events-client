import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Main } from './main';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MainService]
})
export class MainComponent implements OnInit {

  constructor(private service : MainService) { }

  main : Main;
  error: any;

  url = 'https://mirek-mockapi.herokuapp.com/api/v1/content/main/';

  showContent(){
    this.service.getContent(this.url).subscribe(data => this.main = {
      name: data['name'],
      text: data['text']
    },
    error => this.error = error
    );
  }

  ngOnInit() {
    this.showContent();
  }

}
