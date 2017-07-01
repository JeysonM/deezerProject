import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { InicioPage } from '../pages/inicio/inicio';
import { PersonajesPage } from '../pages/personajes/personajes';
import { MaquinasPage } from '../pages/maquinas/maquinas';
import { SoundtrackPage } from '../pages/soundtrack/soundtrack';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';
import { PerfilesPage } from '../pages/perfiles/perfiles';

import { PlaylistsPage } from '../pages/playlists/playlists';
import { SongsPage } from '../pages/songs/songs';


@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    PersonajesPage,
    MaquinasPage,
    SoundtrackPage,
    ContactoPage,
    AcercaPage,
    PerfilesPage,

    PlaylistsPage,
    SongsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PersonajesPage,
    MaquinasPage,
    SoundtrackPage,
    ContactoPage,
    AcercaPage,
    PerfilesPage,
    
    PlaylistsPage,
    SongsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
