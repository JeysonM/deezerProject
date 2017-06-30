import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { PersonajesPage } from '../pages/personajes/personajes';
import { MaquinasPage } from '../pages/maquinas/maquinas';
import { SoundtrackPage } from '../pages/soundtrack/soundtrack';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    PersonajesPage,
    MaquinasPage,
    SoundtrackPage,
    ContactoPage,
    AcercaPage
  ],
  imports: [
    BrowserModule,
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
    AcercaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
