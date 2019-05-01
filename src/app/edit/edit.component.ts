import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  constructor(private _user: UsersService, private fb: FormBuilder, private router: Router, private snack: MatSnackBar) { 
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      designation: '',
      email: '',
      phone: ''
    });
  }

  ngOnInit() {
 
  }


}
