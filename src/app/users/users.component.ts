import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../user';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]

})
export class UsersComponent implements OnInit {
  users: any;
  createForm: FormGroup;
  private hiddenewUser: boolean = false;

  constructor(private _user: UsersService, private fb: FormBuilder, private router: Router, private snack: MatSnackBar, private saveSwal: SweetAlert2Module) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      designation: '',
      email: '',
      phone: ''
    });
  }

  ngOnInit() {
    this._user.getUsers().subscribe(
      user => this.users = user,
    );

  }

  //add user

  addUser(name, designation, email, phone) {
    this._user.addUser(name, designation, email, phone).subscribe();
    // this.router.navigate(['/home']);
    this.snack.open('user updated successfully', 'OK', {
      duration: 3000
    });
  }

  newUser() {
    this.hiddenewUser = true;
  }

  // delete user

  deleteUser(id: any) {
    let videoArray = this.users;
    this._user.deleteUser(id)
      .subscribe(resDeletedVideo => {
        for (let i = 0; i < videoArray.length; i++) {
          if (videoArray[i]._id === id) {
            videoArray.splice(i, 1);
          }
        }
      });
      this.snack.open('user deleted successfully', 'OK', {
        duration: 3000
      });
  };

}
