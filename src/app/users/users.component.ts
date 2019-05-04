import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../user';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

declare var Swal:any
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

  constructor(
    private _user: UsersService, 
    private fb: FormBuilder, 
    private router: Router,
    private snack: MatSnackBar, 
    private saveSwal: SweetAlert2Module
    ) {
    this.createForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern(/^.{0,50}$/)])],
      designation: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)])]
    });
  }

  ngOnInit() {
    this._user.getUsers().subscribe(
      user => this.users = user,
    );

  }

  //reset form
  revert():void {
    this.createForm.reset();
  }

  //add user
  addUser(name, designation, email, phone) {
    this._user.addUser(name, designation, email, phone).subscribe();
    // this.router.navigate(['/home']);
    this.snack.open('user Added successfully', 'OK', {
      duration: 3000
    });
  }

  newUser() {
    this.hiddenewUser = true;
  }

  // delete user

  deleteUser(id: any) {
      //swal
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          let userArray = this.users;
          this._user.deleteUser(id)
            .subscribe(data => {
              for (let i = 0; i < userArray.length; i++) {
                if (userArray[i]._id === id) {
                  userArray.splice(i, 1);
                }
              }
            });
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
  };

//edit users
editUser(id) {
  this.router.navigate([`/edit/${id}`]);
}


}
