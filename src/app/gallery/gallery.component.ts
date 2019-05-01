import { Component, OnInit } from '@angular/core';
import { Albums } from '../album';
import { AlbumService } from '../album.service'
import { Observable } from 'rxjs';
declare var $:any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[AlbumService]
})
export class GalleryComponent implements OnInit {
  albums:any;
  constructor( private _album: AlbumService) { }

  public galleryTitle:string = 'Welcome to Galley Page';
  ngOnInit() {
    this._album.getAlbums().subscribe(
      album => this.albums = album,
    );
  }

  defaultImage = 'https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
  offset = 100;

}
