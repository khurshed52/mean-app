import { Component, OnInit } from '@angular/core';
import { HomeService} from '../home.service';
import { Router } from '@angular/router';
import { Homes } from '../home';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any;
  constructor( private _post: HomeService, private router: Router) { }
  go:string= 'go to details';
  ngOnInit() {
    this._post.getPosts().subscribe(post => 
      this.posts = post,
    );
  }

  detailsPage(id) {
    this.router.navigate([`/homedetails/${id}`]);
  }
  
}
