import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DeezerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DeezerService {
  public deezerAPI: string;

  constructor(public http: Http) {
    this.deezerAPI = 'https://api.deezer.com/';
  }


  getUsers(){
    //return this.http.get('https://api.myjson.com/bins/w076v')
    return this.http.get('assets/perfiles.json')
      .map( res => res.json() )
  }

  getUserDetail(userID){
    return this.http.get(this.deezerAPI + "user/" + userID)
      .map( res => res.json() )
  }

  getUserPlaylists(userID){
    return this.http.get(this.deezerAPI + "user/" + userID + "/playlists")
      .map( res => res.json() )
  }

  getPlaylistSongs(playlistID){
    return this.http.get(this.deezerAPI + "playlist/" + playlistID + "/tracks")
      .map( res => res.json() )
  }

}