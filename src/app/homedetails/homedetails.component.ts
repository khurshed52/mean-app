import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService} from '../shared/home.service';
import { Homes } from '../shared/home';
@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.css']
})
export class HomedetailsComponent implements OnInit {
  post: any;

  constructor(  private _post: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this._post.getPost(params.get('id')).subscribe(posts =>{
       console.log(posts);
       this.post = posts;
       })   
       });
  }

}
