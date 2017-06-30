import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { PersonajesPage } from '../pages/personajes/personajes';
import { MaquinasPage } from '../pages/maquinas/maquinas';
import { SoundtrackPage } from '../pages/soundtrack/soundtrack';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';

@Component({
  templateUrl: 'app.html'
})


export class MyApp {

  @ViewChild('NAV') nav: Nav;
  public rootPage: any;
  public pages: Array<{titulo: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    this.rootPage = InicioPage;
    this.pages = [
      { titulo: 'Inicio',     component: InicioPage,     icon: 'home'},
      { titulo: 'Personajes', component: PersonajesPage, icon: 'person'},
      { titulo: 'Maquinas',   component: MaquinasPage,   icon: 'bug'},
      { titulo: 'Soundtrack', component: SoundtrackPage, icon: 'headset'},
      { titulo: 'Contacto',   component: ContactoPage,   icon: 'mail'},
      { titulo: 'Acerca de',  component: AcercaPage,     icon: 'information-circle'}
    ];
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }

}

