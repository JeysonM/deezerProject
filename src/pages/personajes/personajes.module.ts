import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonajesPage } from './personajes';

@NgModule({
  declarations: [
    PersonajesPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonajesPage),
  ],
  exports: [
    PersonajesPage
  ]
})
export class PersonajesModule {}
