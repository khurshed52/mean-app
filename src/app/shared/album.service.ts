import { Injectable } from '@angular/core';
import { Albums } from './album';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor( private http: HttpClient) { }
  private get_url = "/api/albums";
  private del_url = "/api/albums/";
  //get album
  getAlbums(){
    return this.http.get(this.get_url);
  }

  //delete album
deleteAlbum(id){
  return this.http.delete(this.del_url+id)
}
//post album
addAlbum(title, url) {
  const album = {
    title: title,
    url: url
  };
  return this.http.post(this.get_url, album);
}

}
