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
  constructor( private user: UsersService) { }

  ngOnInit() {
    this.user.getUsers().subscribe(  
      user => this.users = user,
    );
  }

}
