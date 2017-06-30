import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaquinasPage } from './maquinas';

@NgModule({
  declarations: [
    MaquinasPage,
  ],
  imports: [
    IonicPageModule.forChild(MaquinasPage),
  ],
  exports: [
    MaquinasPage
  ]
})
export class MaquinasModule {}
