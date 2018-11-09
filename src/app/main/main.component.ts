import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Main } from './main';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MainService]
})
export class MainComponent implements OnInit {

  constructor(private service : MainService) { }

  main : Main;

  url = 'http://localhost:8000/api/v1/content/main/';

  showContent(){
    this.service.getContent(this.url).subscribe((data : Main) => this.main = {
      name: data['name'],
      text: data['text']
    });
  }

  ngOnInit() {
    this.showContent();
  }

}
