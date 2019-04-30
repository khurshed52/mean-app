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

  getAlbums(){
    return this.http.get(this.get_url);
  }
}
