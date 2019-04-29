import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Users} from './user';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Users[];


  constructor(private http: HttpClient) { }

  private get_url = "api/users";
  private del_url = "/api/users/";
  //get user
  getUsers() {
    return this.http.get(this.get_url);
  }

  // addUser(user: Users) {
  //    let headers = new Headers({ 'Content-Type': 'application/json' });
  //    let options = new RequestOptions({ headers: headers });
  //    return this.http.post(this.get_url, JSON.stringify(user))
  //      .map((response: Response) => response.json());
  //  }


  addUser(name, designation, email, phone) {
    const user = {
      name: name,
      designation: designation,
      email: email,
      phone: phone
    };
    return this.http.post(this.get_url, user);
  }

//delete users
deleteUser(id){
  return this.http.delete(this.del_url+id)
}

getUsersById(id) {
  return this.http.get(this.del_url+id);
}


//update users
updateUsers(user: Users) {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.put(this.del_url + user._id, JSON.stringify(user))
    .map((response: Response) => response.json());
}

}
