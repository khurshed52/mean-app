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
  constructor( private _post: HomeService, private router: Router) { }
  go:string= 'go to details';
  ngOnInit() {
    this._post.getPosts().subscribe(post => 
      this.posts = post,
    );

    this._post.getEmp().subscribe(user => 
      this.users = user,
    );

  }

  detailsPage(id) {
    this.router.navigate([`/homedetails/${id}`]);
  }

  files = ['webpack', 'Angular', 'Angular 2+', 'react'] ;

  userEmail(email) {
   // alert(email);
    Swal.fire({
     type: 'success',
     text: email,
  })
  }
}
