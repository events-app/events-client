import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Main } from './main';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getContent(url){
    return this.http.get<Main>(url);
  }

}
