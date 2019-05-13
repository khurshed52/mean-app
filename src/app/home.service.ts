import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Homes } from './home';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient) { }

  private url = 'https://jsonplaceholder.typicode.com/posts';

  getPosts() {
    return this.http.get(this.url);
  }

  getPost(homeId){
    return this.http.get(`${this.url}/${homeId}`) 
   }
}
