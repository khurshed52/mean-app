import { Component, OnInit } from '@angular/core';
import { Albums } from '../album';
import { AlbumService } from '../album.service'
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
  constructor( private _album: AlbumService) { }

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

}
