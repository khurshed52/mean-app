import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import {DbService} from '../db.service'
import { SalaryService} from '../shared/salary.service';
declare var Swal:any

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  salaries: any;
  constructor( private _salary:SalaryService ) { }

  ngOnInit() {
    this._salary.getSalary().subscribe(salary => this.salaries= salary)
  }

  getSalary(id) {
   // alert(salary);
    Swal.fire({
      title: 'Your Id',
      text: id,
    })
  }

}
