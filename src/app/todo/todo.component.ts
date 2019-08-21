import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import {DbService} from '../db.service';
import { SalaryService} from '../shared/salary.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
declare var Swal:any

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  salaries: any;
  loading:boolean = true;
  constructor( private _salary:SalaryService, private router: Router ) { }

  ngOnInit() {
    this._salary.getSalary().subscribe(
      salary => {
      console.log(salary);
      this.salaries = salary;
      this.loading = false
    });

  }

  getSalary(id):void {
    this.router.navigate([`/edit/${id}`]);
  }

  lat: number = 26.507400;
  lng: number = 83.782310;


  albums = [
    {name:'album 1', img:'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {name:'album 2', img:'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}
  ]

}
