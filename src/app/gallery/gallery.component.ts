import { Component, OnInit } from '@angular/core';
import { Albums } from '../album';
import { AlbumService } from '../album.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
declare var Swal:any
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[AlbumService]
})
export class GalleryComponent implements OnInit {
  albums:any;
  p: number = 1;
  public addGalleryForm:boolean = false;
  addForm:FormGroup;
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

  public galleryTitle:string = 'Welcome to Gallery Page';
  ngOnInit() {
    this._album.getAlbums().subscribe(
      album => this.albums = album,
    );
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
  showForm():void  {
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


}
