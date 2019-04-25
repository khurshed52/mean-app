import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Users} from './user';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  //get user
  getUsers() {
    return this.http.get('http://localhost:3000/api/users');
  }


}
