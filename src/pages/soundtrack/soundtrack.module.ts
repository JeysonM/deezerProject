import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoundtrackPage } from './soundtrack';

@NgModule({
  declarations: [
    SoundtrackPage,
  ],
  imports: [
    IonicPageModule.forChild(SoundtrackPage),
  ],
  exports: [
    SoundtrackPage
  ]
})
export class SoundtrackModule {}
