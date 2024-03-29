import { Component, OnInit } from '@angular/core';
import { Albums } from '../shared/album';
import { AlbumService } from '../shared/album.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

declare var Swal:any;
declare var $:any
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[AlbumService]
})
export class GalleryComponent implements OnInit {
  public data:string = "we are gonna change data here";
  albums:any;
  p: number = 1;
  public addGalleryForm:boolean = false;
  addForm:FormGroup;
  testForm:FormGroup;
  public galleryTitle:string = 'Welcome to Gallery Page';
  constructor(
    private _album: AlbumService,
    private fb: FormBuilder,
    private snack : MatSnackBar
  ) {
    this.addForm = this.fb.group({
      title:['', Validators.compose([Validators.required, Validators.pattern(/^.{0,50}$/)])],
      url:['', Validators.compose([Validators.required, Validators.pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)])]
    }); 

  }

 
  ngOnInit() {
    //test reactive form
    this.testForm = this.fb.group({
      yourName:['', Validators.compose([Validators.required])],
      yourAge:['', Validators.required],
    });
    this._album.getAlbums().subscribe(
      album => this.albums = album,
    );
    //slider
    $('.slider-banner').flexCarousel({
      autoplay: true,
      arrows:false,
      autoplaySpeed: 5000
   });
  }

  defaultImage = 'https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  offset = 100;

  //delete album
  deleteAlbum(id: any) {
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
        let albumArray = this.albums;
        this._album.deleteAlbum(id)
          .subscribe(data => {
            for (let i = 0; i < albumArray.length; i++) {
              if (albumArray[i]._id === id) {
                albumArray.splice(i, 1);
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

  //show gallery add form
  showForm(): void  {
    this.addGalleryForm = !this.addGalleryForm;
    //this.addGalleryForm = true;
  }

  addGallery(title, url){
    this.addGalleryForm = false;
    this._album.addAlbum(title, url).subscribe();
    this.snack.open('Album Added successfully', 'OK', {
      duration: 3000
    });
  }

 public sub():void {
   console.log(this.testForm.value)
 }

 isUserLoggedin:boolean = false

 loggedIn(){
   this.isUserLoggedin = true;
 }

 loggedOut(){
   this.isUserLoggedin = false
 }

public colors = [ "red", "green", "blue"];

public doc = _.join(this.colors, '~');

search(obj) {
  console.log(obj.value)
}

mySlideImages = [
 { url:'https://image.shutterstock.com/image-photo/colorful-fo-election-vote-hand-600w-794518426.jpg', alt: 'image 1', text:'first text here'},
 { url:'https://image.shutterstock.com/image-photo/many-thumbs-idea-600w-229841500.jpg', alt: 'image 2', text:'second text here'},
 { url:'https://cdn.pixabay.com/photo/2018/06/15/08/30/african-3476371_1280.jpg', alt: 'image 3', text:'third text here'}
] 
mySlideOptions={items: 1, dots: true, nav: false, autoplay: true, smartSpeed:1000, autoplayTimeout:4000, loop: true};

}
