import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users} from '../user';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  selectedUser: Users;
  private hiddenewUser: boolean = true;
  constructor( private _user: UsersService) { }

  ngOnInit() {
    this._user.getUsers().subscribe(  
      user => this.users = user,
    );
  }

  onSubmitAddUser(user: Users) {
    this._user.addUser(user)
      .subscribe(resNewUser => {
        this.users.push(resNewUser);
        this.hiddenewUser = true;
        this.selectedUser = resNewUser;
      });
    }


    newUser() {
      this.hiddenewUser = false;
    }
}
