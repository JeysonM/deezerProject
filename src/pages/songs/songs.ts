import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DeezerService } from '../../providers/deezer-service';

@IonicPage()
@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html',
  providers: [ DeezerService ]
})
export class SongsPage {
  public playlist: any;
  public songs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService) {
    this.playlist = this.navParams.get('playlist');
    this.songs = [];
    console.log(this.playlist);
  }

  ionViewDidLoad() {
    this.ds.getPlaylistSongs(this.playlist.id).subscribe( data => {
      this.songs = data.data;
      console.log(this.songs);
    })
  }

}
