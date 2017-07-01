import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SongsPage } from '../songs/songs';

import { DeezerService } from '../../providers/deezer-service';


@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
  providers: [ DeezerService ]
})
export class PlaylistsPage {
  public user: any;
  public playlists: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService) {
    this.user = this.navParams.get('user');
    this.playlists = [];
    console.log(this.user);
  }

  goToSongs(playlist){
    this.navCtrl.push(SongsPage,{playlist: playlist});
  }

  ionViewDidLoad() {
    this.ds.getUserPlaylists(this.user.id).subscribe( data => {
      this.playlists = data.data;
      console.log(this.playlists);
    })
  }

}
