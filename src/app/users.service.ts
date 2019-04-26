import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Users} from './user';
import 'rxjs/add/operator/map';

declare var JSON:any
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private get_url = "http://localhost:4000/api/users"
  //get user
  getUsers() {
    return this.http.get(this.get_url);
  }

  addUser(user: Users) {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     return this.http.post(this.get_url, JSON.stringify(user))
       .map((response: Response) => response.json());
   }



}
