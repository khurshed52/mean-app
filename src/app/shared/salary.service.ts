import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Salary} from './salary';
@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  constructor( private http:HttpClient ) { }
  private url = 'http://localhost:4000/api/salary';

  getSalary() {
    return this.http.get(this.url);
  }
}
