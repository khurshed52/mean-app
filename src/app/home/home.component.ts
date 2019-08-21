import { Component, OnInit } from '@angular/core';
import { HomeService} from '../shared/home.service';
import { Router } from '@angular/router';
import { Homes } from '../shared/home';
import { Users } from '../shared/user';
declare var Swal:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any;
  users:any;
  services:any;
  loading:boolean =true;
  constructor( private _post: HomeService, private router: Router) { }
  go:string= 'go to details';
  ngOnInit() {

    this._post.getService().subscribe(service=> this.services= service)

    this._post.getPosts().subscribe(post => 
      this.posts = post,
    );

    this._post.getEmp().subscribe(
      user => {
        console.log(user);
        this.users = user;
        this.loading = false 
      } 
    );

  }

  detailsPage(id) {
    this.router.navigate([`/homedetails/${id}`]);
  }

  files = [
    {'name':'webpack', 'rating': 10}, 
    {'name': 'Angular' , rating: 10}, 
    {'name': 'Angular 2+' , rating: 5}, 
    {'name':'react', rating: 6}
  ] ;

  userEmail(email) {
    Swal.fire({
     type: 'success',
     text: email
  })
  }

  del(user) {
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
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  getId(id) {
    console.log(id)
  }

  public carList = ['bmw', 'ferrari', 'maruti'];
  public bikeList = ['honda', 'yamaha', 'suzuki'];

public all = [...this.carList, ...this.bikeList].join(' ')

}
