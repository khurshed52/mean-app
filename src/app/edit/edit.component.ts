import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';

import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../user';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updateForm: FormGroup;
  id: String;
  users: any = {};

  constructor(private _user: UsersService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private snack: MatSnackBar) { 
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      email: '',
      phone: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._user.getUsersById(params['id']).subscribe(res => {
        //console.log(res);
        this.users = res;
      });
    });
  }

  editUsers(name, designation, email, phone) {
     this.route.params.subscribe(params => {
       this._user.updateUser(name, designation, email, phone, params['id']);
        this.router.navigate(['users']);
        this.snack.open('user updated successfully', 'OK', {
          duration: 3000
        });
     });
  }
  

  
}
