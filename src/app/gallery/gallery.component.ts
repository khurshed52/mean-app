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

  ngOnInit() {
    this._album.getAlbums().subscribe(
      album => this.albums = album,
    );

  }

}
